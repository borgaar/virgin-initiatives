"use client";

import { createRef, useEffect, useRef, useState } from "react";
import { env } from "@/env";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Layer,
  LayerSpecification,
  MapEvent,
  MapRef,
  Marker,
  NavigationControl,
  Source,
  ViewState,
} from "react-map-gl/mapbox";
import { MapProjectCard, ProjectCardProps } from "../_components/project/card";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { AnimatePresence, motion } from "motion/react";

type ProjectCardMarker = ProjectCardProps & {
  id: string;
  lat: number;
  lon: number;
};

const dataLayer: LayerSpecification = {
  id: "data",
  type: "line",
  source: "geojson",
  paint: {
    "line-color": "#FFFFFF",
    "line-width": 1.5,
  },
};

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export default function Statistics() {
  const [popupInfo, setPopupInfo] = useState<{
    data: ProjectCardMarker;
    viewState: ViewState;
  } | null>(null);

  const [currentViewState, setCurrentViewState] = useState<ViewState>({
    zoom: 1,
    latitude: 47.42853,
    longitude: 9.376571,
    bearing: 0,
    pitch: 30,
    padding: {},
  });

  const mapRef = useRef<MapRef>(null);

  const [exploring, setExploring] = useState(false);

  const items: ProjectCardMarker[] = [
    {
      id: "1",
      title: "Clean Ocean Initiative",
      description: `
        Our global effort to remove 5 million tons of plastic from oceans by
        2030, spanning 15 countries across 3 continents, as well as educating
        communities on sustainable practices.
      `,
      tag: "Environment",
      stats: [
        { label: "Companies", value: "7" },
        { label: "Participants", value: "1.2k" },
        { label: "Progress", value: "35%" },
        { label: "Target Year", value: "2027" },
      ],
      lat: 43,
      lon: 13,
    },
    {
      id: "2",
      title: "Build a new park",
      description: `
        Our city needs more green spaces. Let's build a new park for everyone to enjoy.
      `,
      tag: "Environment",
      stats: [
        { label: "Companies", value: "7" },
        { label: "Participants", value: "1.2k" },
        { label: "Progress", value: "35%" },
        { label: "Target Year", value: "2027" },
      ],
      lat: 24,
      lon: 13,
    },
  ];

  function handleViewStateChange(viewState: ViewState) {
    setCurrentViewState(viewState);
  }

  function handleAnimationEnd(e: MapEvent) {
    if (exploring) return;

    const secondsPerRevolution = 20;

    let distancePerSecond = 360 / secondsPerRevolution;

    const center = e.target.getCenter();
    center.lng -= distancePerSecond;

    e.target.easeTo({ center, duration: 1000, easing: (n) => n });
  }

  function startExploring() {
    if (exploring) return;
    setExploring(true);
    mapRef.current?.flyTo({
      center: [9.376571, 47.42853],
      zoom: 12,
      duration: 2000,
      easing: (n) => easeInOutCubic(n),
    });
  }

  useEffect(() => {
    if (popupInfo == null) return;

    const { viewState } = popupInfo;
    const zoomDiff = Math.abs(viewState.zoom - currentViewState.zoom);
    const latDiff = Math.abs(viewState.latitude - currentViewState.latitude);
    const lonDiff = Math.abs(viewState.longitude - currentViewState.longitude);

    if (zoomDiff > 1 || latDiff > 1 || lonDiff > 1) {
      setPopupInfo(null);
    }
  }, [currentViewState, popupInfo]);

  return (
    <div className="relative h-[calc(100vh_-_60px)]">
      <AnimatePresence>
        {!exploring && (
          <>
            <motion.h1
              key={"header"}
              initial={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(20px)" }}
              className="absolute left-[50%] top-[50px] z-20 -translate-x-[50%] text-center font-[merriweather] text-4xl"
            >
              Explore the
              <br />
              <span className="italic text-primary">World of Initiative</span>
            </motion.h1>
            <motion.div
              className="absolute bottom-[50px] left-[50%] z-20 -translate-x-[50%]"
              initial={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              key={"button"}
            >
              <Button onClick={startExploring}>
                Explore now <ChevronRight />
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <Map
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/aleks-hse/cm8h8vqmp001001s800tc7gcn"
        style={{
          width: "100%",
          height: "100%",
        }}
        initialViewState={{
          zoom: currentViewState.zoom,
          latitude: currentViewState.latitude,
          longitude: currentViewState.longitude,
          bearing: currentViewState.bearing,
          pitch: currentViewState.pitch,
        }}
        pitchWithRotate={false}
        touchPitch={false}
        dragRotate={false}
        dragPan={exploring}
        scrollZoom={exploring}
        ref={mapRef}
        onMoveEnd={exploring ? undefined : handleAnimationEnd}
        onLoad={handleAnimationEnd}
        onDrag={(e) => handleViewStateChange(e.viewState)}
        onZoom={(e) => handleViewStateChange(e.viewState)}
      >
        {popupInfo && (
          <Source
            type="geojson"
            data={{
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "LineString",
                    coordinates: [
                      [popupInfo.data.lon, popupInfo.data.lat],
                      [popupInfo.data.lon + 0.35, popupInfo.data.lat + 0.35],
                    ],
                  },
                },
              ],
            }}
          >
            <Layer {...dataLayer} />
          </Source>
        )}

        {items.map(({ id, lat, lon, ...item }) => (
          <Marker
            key={id}
            latitude={lat}
            longitude={lon}
            anchor="center"
            onClick={(e) => {
              e.originalEvent.preventDefault();
              e.originalEvent.stopPropagation();
              setPopupInfo({
                data: { id, lat, lon, ...item },
                viewState: currentViewState,
              });
            }}
          >
            <div
              className="h-6 w-6 cursor-pointer rounded-full border-2 border-white bg-blue-500 transition-all hover:h-8 hover:w-8"
              style={{ boxShadow: "0 0 0 2px rgba(0,0,0,0.1)" }}
            />
          </Marker>
        ))}

        {popupInfo && (
          <Marker
            latitude={popupInfo.data.lat + 0.3}
            longitude={popupInfo.data.lon + 0.3}
            anchor="bottom-left"
          >
            <MapProjectCard {...popupInfo.data} />
          </Marker>
        )}
      </Map>
    </div>
  );
}
