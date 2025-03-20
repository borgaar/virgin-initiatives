import { useEffect, useRef, useState } from "react";
import { env } from "@/env";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Layer,
  LayerSpecification,
  MapEvent,
  MapRef,
  Marker,
  Source,
  ViewState,
} from "react-map-gl/mapbox";
import {
  MapProjectCard,
  ProjectCardProps,
  tagToColor,
} from "../../_components/project/card";
import { ChevronRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/lib/projects";

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

function getProps(index: number): ProjectCardProps {
  const project = projects[index]!;
  return {
    title: project.title,
    banner: project.banner,
    description: project.description,
    stats: project.stats,
    tag: project.tag,
  };
}

const items: ProjectCardMarker[] = [
  {
    ...getProps(0), // Ocean Conservation Initiative
    id: "1",
    lat: 43,
    lon: 13,
  },
  {
    ...getProps(5), // Working against poverty
    id: "2",
    lat: 24,
    lon: 13,
  },
  {
    ...getProps(3), // Renewable Energy Project
    id: "3",
    lat: 13.7563,
    lon: 100.5018, // Bangkok, Thailand
  },
  {
    ...getProps(2),
    id: "4",
    lat: -23.5505,
    lon: -46.6333, // São Paulo, Brazil
  },
  {
    ...getProps(2), // Future Academy skills
    id: "5",
    lat: -1.2921,
    lon: 36.8219, // Nairobi, Kenya
  },
  {
    ...getProps(0), // Ocean conservation
    id: "6",
    lat: -33.866667,
    lon: 151.2, // Great Barrier Reef, Australia (approximation)
  },
  {
    ...getProps(1), // Global Healthcare
    id: "7",
    lat: 14.6937,
    lon: -17.4441, // Dakar, Senegal
  },
  {
    ...getProps(0), // Ocean Conservation Initiative
    id: "9",
    lat: -12.0464,
    lon: -77.0428, // Lima, Peru
  },
  {
    ...getProps(1), // Global Healthcare Access
    id: "10",
    lat: 78.2232,
    lon: 15.6267, // Svalbard, Norway
  },
  {
    ...getProps(2), // Future Skills Academy
    id: "11",
    lat: 37.7749,
    lon: -122.4194, // San Francisco, USA
  },
  {
    ...getProps(3), // Renewable Energy Transition
    id: "12",
    lat: 9.082,
    lon: 8.6753, // Nigeria (center)
  },
  {
    ...getProps(4), // Food Security Alliance
    id: "13",
    lat: 33.5138,
    lon: 36.2765, // Damascus, Syria
  },
  {
    ...getProps(5), // Working Against Poverty
    id: "14",
    lat: -26.2041,
    lon: 28.0473, // Johannesburg, South Africa
  },
  {
    ...getProps(6), // Making Science Fiction a Reality
    id: "15",
    lat: 31.2304,
    lon: 121.4737, // Shanghai, China (Yangtze River)
  },
  {
    title: "Seismic-Resistant Housing",
    description:
      "Constructing affordable, earthquake-resistant homes in vulnerable regions, protecting communities from natural disasters and providing safe housing for 10,000 families.",
    tag: "Technology",
    banner: "/projects/t7-1.jpg",
    stats: [
      { label: "Companies", value: "10" },
      { label: "Participants", value: "640" },
      { label: "Progress", value: "32%" },
      { label: "Target Year", value: "2028" },
    ],
    id: "16",
    lat: -12.0464,
    lon: -77.0428, // Lima, Peru
  },
  {
    title: "Arctic Research Station",
    description:
      "Establishing a state-of-the-art climate research facility to monitor polar ice melt and develop strategies to mitigate the effects of climate change on vulnerable ecosystems.",
    tag: "Environment",
    banner: "/projects/t4-1.jpg",
    stats: [
      { label: "Companies", value: "6" },
      { label: "Participants", value: "85" },
      { label: "Progress", value: "51%" },
      { label: "Target Year", value: "2026" },
    ],
    id: "17",
    lat: 78.2232,
    lon: 15.6267, // Svalbard, Norway
  },
  {
    title: "Urban Vertical Farming",
    description:
      "Building vertical hydroponic farms in urban centers to reduce food miles, provide fresh produce year-round, and create green jobs in densely populated areas.",
    tag: "Technology",
    banner: "/projects/t7-1.jpg",
    stats: [
      { label: "Companies", value: "9" },
      { label: "Participants", value: "320" },
      { label: "Progress", value: "75%" },
      { label: "Target Year", value: "2025" },
    ],
    id: "18",
    lat: 37.7749,
    lon: -122.4194, // San Francisco, USA
  },
  {
    title: "Women's Health Initiative",
    description:
      "Expanding access to maternal and reproductive healthcare services for women in underserved communities, with the goal of reaching 1 million women over 5 years.",
    tag: "Healthcare",
    banner: "/projects/t2-1.jpg",
    stats: [
      { label: "Companies", value: "13" },
      { label: "Participants", value: "520" },
      { label: "Progress", value: "38%" },
      { label: "Target Year", value: "2027" },
    ],
    id: "19",
    lat: 9.082,
    lon: 8.6753, // Nigeria (center)
  },
  {
    title: "Historic Site Preservation",
    description:
      "Restoring and preserving cultural heritage sites damaged by conflict or neglect, ensuring these treasures remain for future generations while promoting cultural tourism.",
    tag: "Environment",
    banner: "/projects/t4-1.jpg",
    stats: [
      { label: "Companies", value: "4" },
      { label: "Participants", value: "190" },
      { label: "Progress", value: "22%" },
      { label: "Target Year", value: "2029" },
    ],
    id: "20",
    lat: 33.5138,
    lon: 36.2765, // Damascus, Syria
  },
  {
    title: "Youth Coding Academy",
    description:
      "Providing free programming education to underprivileged youth, preparing 50,000 students for careers in technology and fostering innovation in developing economies.",
    tag: "Education",
    banner: "/projects/t3-1.jpg",
    stats: [
      { label: "Companies", value: "25" },
      { label: "Participants", value: "1.8k" },
      { label: "Progress", value: "68%" },
      { label: "Target Year", value: "2026" },
    ],
    id: "21",
    lat: -26.2041,
    lon: 28.0473, // Johannesburg, South Africa
  },
  {
    title: "Microplastic Filtration System",
    description:
      "Developing and deploying advanced filtration technology in major river systems to prevent microplastics from reaching oceans, protecting marine ecosystems and food chains.",
    tag: "Technology",
    banner: "/projects/t1-1.jpg",
    stats: [
      { label: "Companies", value: "11" },
      { label: "Participants", value: "240" },
      { label: "Progress", value: "43%" },
      { label: "Target Year", value: "2027" },
    ],
    id: "22",
    lat: 31.2304,
    lon: 121.4737, // Shanghai, China (Yangtze River)
  },
  {
    title: "Arctic Wildlife Refuge",
    description:
      "Establishing protected areas for endangered polar species affected by climate change, combining conservation efforts with indigenous knowledge and sustainable tourism.",
    tag: "Environment",
    banner: "/projects/t4-1.jpg",
    stats: [
      { label: "Companies", value: "7" },
      { label: "Participants", value: "130" },
      { label: "Progress", value: "29%" },
      { label: "Target Year", value: "2030" },
    ],
    id: "23",
    lat: 69.7085,
    lon: -143.9918, // Alaska, USA
  },
  {
    title: "Sustainable Fashion Cooperative",
    description:
      "Creating a network of ethical clothing manufacturers committed to fair labor practices, sustainable materials, and transparent supply chains across the fashion industry.",
    tag: "Environment",
    banner: "/projects/t4-1.jpg",
    stats: [
      { label: "Companies", value: "42" },
      { label: "Participants", value: "3.5k" },
      { label: "Progress", value: "55%" },
      { label: "Target Year", value: "2026" },
    ],
    id: "24",
    lat: 23.8103,
    lon: 90.4125, // Dhaka, Bangladesh
  },
  {
    title: "Drought-Resistant Agriculture",
    description:
      "Implementing water-efficient farming techniques and drought-resistant crop varieties in arid regions, increasing food security for communities vulnerable to climate change.",
    tag: "Environment",
    banner: "/projects/t4-1.jpg",
    stats: [
      { label: "Companies", value: "8" },
      { label: "Participants", value: "970" },
      { label: "Progress", value: "61%" },
      { label: "Target Year", value: "2027" },
    ],
    id: "25",
    lat: 15.3694,
    lon: 44.191, // Sana'a, Yemen
  },
  {
    title: "Floating Solar Array",
    description:
      "Building the world's largest floating solar farm on a hydroelectric reservoir, maximizing clean energy production while reducing water evaporation and providing shade for aquatic life.",
    tag: "Energy",
    banner: "/projects/t4-1.jpg",
    stats: [
      { label: "Companies", value: "14" },
      { label: "Participants", value: "380" },
      { label: "Progress", value: "49%" },
      { label: "Target Year", value: "2026" },
    ],
    id: "26",
    lat: -22.9068,
    lon: -43.1729, // Rio de Janeiro, Brazil
  },
  {
    title: "Mental Health Access Initiative",
    description:
      "Expanding mental health services in underserved regions through both physical clinics and telehealth platforms, aiming to reach 2 million people in need of support.",
    tag: "Healthcare",
    banner: "/projects/t2-1.jpg",
    stats: [
      { label: "Companies", value: "19" },
      { label: "Participants", value: "860" },
      { label: "Progress", value: "37%" },
      { label: "Target Year", value: "2028" },
    ],
    id: "27",
    lat: 55.7558,
    lon: 37.6173, // Moscow, Russia
  },
  {
    title: "Urban Mobility Revolution",
    description:
      "Transforming city transportation with an integrated network of electric buses, bike lanes, and pedestrian zones, reducing emissions and improving quality of life in congested urban areas.",
    tag: "Technology",
    banner: "/projects/t7-1.jpg",
    stats: [
      { label: "Companies", value: "16" },
      { label: "Participants", value: "920" },
      { label: "Progress", value: "42%" },
      { label: "Target Year", value: "2027" },
    ],
    id: "28",
    lat: 19.4326,
    lon: -99.1332, // Mexico City, Mexico
  },
  {
    title: "Marine Protected Area Network",
    description:
      "Establishing interconnected marine sanctuaries spanning multiple countries, protecting critical migration routes and breeding grounds for endangered ocean species.",
    tag: "Environment",
    banner: "/projects/t1-1.jpg",
    stats: [
      { label: "Companies", value: "9" },
      { label: "Participants", value: "310" },
      { label: "Progress", value: "33%" },
      { label: "Target Year", value: "2029" },
    ],
    id: "29",
    lat: 3.139,
    lon: 101.6869, // Kuala Lumpur, Malaysia
  },
  {
    title: "Revolutionizing Technology Education",
    description:
      "By removing JavaFX from the student curriculum, we can finally teach students, what they need to succeedd in the real world. Long gone are the days of missery and pain, as we finally remove the last remnants of JavaFX from the curriculum.",
    tag: "Education",
    banner: "/projects/t3-1.jpg",
    stats: [
      { label: "Companies", value: "9" },
      { label: "Participants", value: "310" },
      { label: "Progress", value: "33%" },
      { label: "Target Year", value: "2029" },
    ],
    id: "30",
    lat: 63.4161695850931,
    lon: 10.405766700330533, // Gløshaugen, Trondheim, Norway
  },
];

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export default function GlobeExplorer() {
  const [popupInfo, setPopupInfo] = useState<{
    data: ProjectCardMarker;
    viewState: ViewState;
  } | null>(null);

  const [currentViewState, setCurrentViewState] = useState<ViewState>({
    zoom: 1,
    latitude: 47.42853,
    longitude: 9.376571,
    bearing: 0,
    pitch: 20,
    padding: {},
  });

  const mapRef = useRef<MapRef>(null);

  const [exploring, setExploring] = useState(false);

  function handleViewStateChange(viewState: ViewState) {
    setCurrentViewState(viewState);
  }

  function handleAnimationEnd(e: MapEvent) {
    if (exploring) return;

    const secondsPerRevolution = 100;

    let distancePerSecond = 360 / secondsPerRevolution;

    const center = e.target.getCenter();
    center.lng -= distancePerSecond;

    e.target.easeTo({ center, duration: 1000, easing: (n) => n });
  }

  function toggleExploring() {
    setExploring((e) => !e);
    if (exploring) {
      setPopupInfo(null);
      mapRef.current?.easeTo({
        center: mapRef.current.getCenter(),
        zoom: 1,
        pitch: 20,
        duration: 2000,
        easing: easeInOutCubic,
      });
    } else {
      mapRef.current?.easeTo({
        center: [9.376571, 47.42853],
        zoom: 5,
        pitch: 20,
        duration: 2000,
        easing: easeInOutCubic,
      });
    }
  }
  useEffect(() => {
    if (exploring) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    projects.forEach((p, i) => console.log(i, p.title));
  }, [exploring]);

  function openPopup(info: { data: ProjectCardMarker; viewState: ViewState }) {
    const zoom = mapRef.current?.getZoom() ?? 0;
    if (!exploring) setExploring(true);
    mapRef.current
      ?.flyTo({
        center: [info.data.lon, info.data.lat],
        zoom: zoom < 6 ? 6 : zoom > 8 ? 8 : zoom,
        duration: 1000,
        easing: easeInOutCubic,
      })
      .once("moveend", (e) =>
        setPopupInfo({
          data: info.data,
          viewState: {
            zoom: e.target.getZoom(),
            latitude: e.target.getCenter().lat,
            longitude: e.target.getCenter().lng,
            bearing: e.target.getBearing(),
            padding: e.target.getPadding(),
            pitch: e.target.getPitch(),
          },
        }),
      );
  }

  useEffect(() => {
    document.body.classList.toggle("stats-exploring", exploring);
  }, [exploring]);

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
    <div className="relative h-screen w-full border-solid">
      <AnimatePresence>
        {!exploring && (
          <>
            <motion.h1
              key={"header"}
              initial={{
                opacity: 0,
                filter: "blur(20px)",
              }}
              exit={{
                opacity: 0,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 1,
              }}
              className="absolute left-[50%] top-[50px] z-20 -translate-x-[50%] pt-24 text-center font-[merriweather] text-4xl"
            >
              Explore the
              <br />
              <span className="italic text-primary">World of Initiative</span>
            </motion.h1>
          </>
        )}
      </AnimatePresence>
      <Button
        className="absolute bottom-[50px] left-[50%] z-20 -translate-x-[50%]"
        onClick={toggleExploring}
      >
        {exploring ? "Go back" : "Explore now"} <ChevronRight />
      </Button>
      <Map
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/aleks-hse/cm8h8vqmp001001s800tc7gcn"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
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
        attributionControl={false}
        onLoad={(e) => {
          e.target.setFog({
            color: "rgb(186, 210, 235)", // Fog color
            "horizon-blend": 0.02, // Keep this low for a sharp horizon line
            "space-color": "black", // Background color
            "vertical-range": [1, 2],
            "high-color": "rgb(36, 92, 223)",
          });
          // remove country names if `exploring` is false
          e.target.setLayoutProperty(
            "country-label",
            "visibility",
            exploring ? "visible" : "none",
          );
          // remove continent names if `exploring` is false
          e.target.setLayoutProperty(
            "continent-label",
            "visibility",
            exploring ? "visible" : "none",
          );
          handleAnimationEnd(e);
        }}
        onDrag={(e) => handleViewStateChange(e.viewState)}
        onZoom={(e) => handleViewStateChange(e.viewState)}
        onClick={() => setPopupInfo(null)}
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
              openPopup({
                data: { id, lat, lon, ...item },
                viewState: currentViewState,
              });
            }}
          >
            <div
              className="h-6 w-6 cursor-pointer rounded-full border-2 border-white transition-all hover:h-8 hover:w-8"
              style={{
                boxShadow: "0 0 0 2px rgba(0,0,0,0.1)",
                backgroundColor: tagToColor(item.tag),
              }}
            />
          </Marker>
        ))}
        {popupInfo && (
          <Link href="/projects/1">
            <Marker
              latitude={popupInfo.data.lat + 0.3}
              longitude={popupInfo.data.lon + 0.3}
              anchor="bottom-left"
              // Navigate to "/projects/1" when clicking on the card
              onClick={(e) => {
                e.originalEvent.preventDefault();
                e.originalEvent.stopPropagation();
                window.location.href = "/projects/1";
              }}
            >
              <MapProjectCard {...popupInfo.data} />
            </Marker>
          </Link>
        )}
      </Map>
    </div>
  );
}
