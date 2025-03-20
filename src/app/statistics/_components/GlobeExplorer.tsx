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
  {
    id: "3",
    title: "Renewable Energy Hub",
    description: `
      Creating the largest solar and wind energy facility in Southeast Asia, 
      providing clean power to over 500,000 homes and reducing carbon emissions 
      by 2.5 million tons annually.
    `,
    tag: "Energy",
    stats: [
      { label: "Companies", value: "12" },
      { label: "Participants", value: "850" },
      { label: "Progress", value: "62%" },
      { label: "Target Year", value: "2026" },
    ],
    lat: 13.7563,
    lon: 100.5018, // Bangkok, Thailand
  },
  {
    id: "4",
    title: "Urban Reforestation Project",
    description: `
      Transforming urban centers by planting 1 million trees across 50 cities, 
      improving air quality and creating green spaces in densely populated areas.
    `,
    tag: "Environment",
    stats: [
      { label: "Companies", value: "23" },
      { label: "Participants", value: "5.7k" },
      { label: "Progress", value: "41%" },
      { label: "Target Year", value: "2028" },
    ],
    lat: -23.5505,
    lon: -46.6333, // São Paulo, Brazil
  },
  {
    id: "5",
    title: "Digital Literacy Campaign",
    description: `
      Providing technology access and digital skills training to underserved 
      communities, empowering 100,000 people with essential skills for the 
      modern workforce.
    `,
    tag: "Education",
    stats: [
      { label: "Companies", value: "18" },
      { label: "Participants", value: "720" },
      { label: "Progress", value: "53%" },
      { label: "Target Year", value: "2026" },
    ],
    lat: -1.2921,
    lon: 36.8219, // Nairobi, Kenya
  },
  {
    id: "6",
    title: "Coral Reef Restoration",
    description: `
      Revitalizing damaged coral ecosystems using innovative cultivation techniques,
      restoring marine biodiversity and protecting coastal communities from storms.
    `,
    tag: "Environment",
    stats: [
      { label: "Companies", value: "5" },
      { label: "Participants", value: "215" },
      { label: "Progress", value: "28%" },
      { label: "Target Year", value: "2029" },
    ],
    lat: -33.866667,
    lon: 151.2, // Great Barrier Reef, Australia (approximation)
  },
  {
    id: "7",
    title: "Clean Water Initiative",
    description: `
      Building sustainable water treatment facilities in rural communities, 
      providing clean drinking water to over 300,000 people in regions facing 
      severe water scarcity.
    `,
    tag: "Technology",
    stats: [
      { label: "Companies", value: "8" },
      { label: "Participants", value: "430" },
      { label: "Progress", value: "47%" },
      { label: "Target Year", value: "2026" },
    ],
    lat: 14.6937,
    lon: -17.4441, // Dakar, Senegal
  },
  {
    id: "8",
    title: "Sustainable Farming Network",
    description: `
      Teaching regenerative agriculture techniques to small-scale farmers, 
      improving crop yields while reducing environmental impact and building 
      climate resilience.
    `,
    tag: "Environment",
    stats: [
      { label: "Companies", value: "15" },
      { label: "Participants", value: "2.3k" },
      { label: "Progress", value: "65%" },
      { label: "Target Year", value: "2027" },
    ],
    lat: 28.6139,
    lon: 77.209, // New Delhi, India
  },
  {
    id: "9",
    title: "Seismic-Resistant Housing",
    description: `
      Constructing affordable, earthquake-resistant homes in vulnerable regions, 
      protecting communities from natural disasters and providing safe housing 
      for 10,000 families.
    `,
    tag: "Technology",
    stats: [
      { label: "Companies", value: "10" },
      { label: "Participants", value: "640" },
      { label: "Progress", value: "32%" },
      { label: "Target Year", value: "2028" },
    ],
    lat: -12.0464,
    lon: -77.0428, // Lima, Peru
  },
  {
    id: "10",
    title: "Arctic Research Station",
    description: `
      Establishing a state-of-the-art climate research facility to monitor polar 
      ice melt and develop strategies to mitigate the effects of climate change 
      on vulnerable ecosystems.
    `,
    tag: "Environment",
    stats: [
      { label: "Companies", value: "6" },
      { label: "Participants", value: "85" },
      { label: "Progress", value: "51%" },
      { label: "Target Year", value: "2026" },
    ],
    lat: 78.2232,
    lon: 15.6267, // Svalbard, Norway
  },
  {
    id: "11",
    title: "Urban Vertical Farming",
    description: `
      Building vertical hydroponic farms in urban centers to reduce food miles, 
      provide fresh produce year-round, and create green jobs in densely populated areas.
    `,
    tag: "Technology",
    stats: [
      { label: "Companies", value: "9" },
      { label: "Participants", value: "320" },
      { label: "Progress", value: "75%" },
      { label: "Target Year", value: "2025" },
    ],
    lat: 37.7749,
    lon: -122.4194, // San Francisco, USA
  },
  {
    id: "12",
    title: "Women's Health Initiative",
    description: `
      Expanding access to maternal and reproductive healthcare services for women 
      in underserved communities, with the goal of reaching 1 million women over 5 years.
    `,
    tag: "Healthcare",
    stats: [
      { label: "Companies", value: "13" },
      { label: "Participants", value: "520" },
      { label: "Progress", value: "38%" },
      { label: "Target Year", value: "2027" },
    ],
    lat: 9.082,
    lon: 8.6753, // Nigeria (center)
  },
  {
    id: "13",
    title: "Historic Site Preservation",
    description: `
      Restoring and preserving cultural heritage sites damaged by conflict or neglect, 
      ensuring these treasures remain for future generations while promoting 
      cultural tourism.
    `,
    tag: "Environment",
    stats: [
      { label: "Companies", value: "4" },
      { label: "Participants", value: "190" },
      { label: "Progress", value: "22%" },
      { label: "Target Year", value: "2029" },
    ],
    lat: 33.5138,
    lon: 36.2765, // Damascus, Syria
  },
  {
    id: "14",
    title: "Youth Coding Academy",
    description: `
      Providing free programming education to underprivileged youth, 
      preparing 50,000 students for careers in technology and fostering 
      innovation in developing economies.
    `,
    tag: "Education",
    stats: [
      { label: "Companies", value: "25" },
      { label: "Participants", value: "1.8k" },
      { label: "Progress", value: "68%" },
      { label: "Target Year", value: "2026" },
    ],
    lat: -26.2041,
    lon: 28.0473, // Johannesburg, South Africa
  },
  {
    id: "15",
    title: "Microplastic Filtration System",
    description: `
      Developing and deploying advanced filtration technology in major river systems 
      to prevent microplastics from reaching oceans, protecting marine ecosystems 
      and food chains.
    `,
    tag: "Technology",
    stats: [
      { label: "Companies", value: "11" },
      { label: "Participants", value: "240" },
      { label: "Progress", value: "43%" },
      { label: "Target Year", value: "2027" },
    ],
    lat: 31.2304,
    lon: 121.4737, // Shanghai, China (Yangtze River)
  },
  {
    id: "16",
    title: "Arctic Wildlife Refuge",
    description: `
      Establishing protected areas for endangered polar species affected by 
      climate change, combining conservation efforts with indigenous knowledge 
      and sustainable tourism.
    `,
    tag: "Environment",
    stats: [
      { label: "Companies", value: "7" },
      { label: "Participants", value: "130" },
      { label: "Progress", value: "29%" },
      { label: "Target Year", value: "2030" },
    ],
    lat: 69.7085,
    lon: -143.9918, // Alaska, USA
  },
  {
    id: "17",
    title: "Sustainable Fashion Cooperative",
    description: `
      Creating a network of ethical clothing manufacturers committed to 
      fair labor practices, sustainable materials, and transparent supply chains 
      across the fashion industry.
    `,
    tag: "Environment",
    stats: [
      { label: "Companies", value: "42" },
      { label: "Participants", value: "3.5k" },
      { label: "Progress", value: "55%" },
      { label: "Target Year", value: "2026" },
    ],
    lat: 23.8103,
    lon: 90.4125, // Dhaka, Bangladesh
  },
  {
    id: "18",
    title: "Drought-Resistant Agriculture",
    description: `
      Implementing water-efficient farming techniques and drought-resistant crop 
      varieties in arid regions, increasing food security for communities vulnerable 
      to climate change.
    `,
    tag: "Environment",
    stats: [
      { label: "Companies", value: "8" },
      { label: "Participants", value: "970" },
      { label: "Progress", value: "61%" },
      { label: "Target Year", value: "2027" },
    ],
    lat: 15.3694,
    lon: 44.191, // Sana'a, Yemen
  },
  {
    id: "19",
    title: "Floating Solar Array",
    description: `
      Building the world's largest floating solar farm on a hydroelectric reservoir, 
      maximizing clean energy production while reducing water evaporation and 
      providing shade for aquatic life.
    `,
    tag: "Energy",
    stats: [
      { label: "Companies", value: "14" },
      { label: "Participants", value: "380" },
      { label: "Progress", value: "49%" },
      { label: "Target Year", value: "2026" },
    ],
    lat: -22.9068,
    lon: -43.1729, // Rio de Janeiro, Brazil
  },
  {
    id: "20",
    title: "Mental Health Access Initiative",
    description: `
      Expanding mental health services in underserved regions through both 
      physical clinics and telehealth platforms, aiming to reach 2 million 
      people in need of support.
    `,
    tag: "Healthcare",
    stats: [
      { label: "Companies", value: "19" },
      { label: "Participants", value: "860" },
      { label: "Progress", value: "37%" },
      { label: "Target Year", value: "2028" },
    ],
    lat: 55.7558,
    lon: 37.6173, // Moscow, Russia
  },
  {
    id: "21",
    title: "Urban Mobility Revolution",
    description: `
      Transforming city transportation with an integrated network of electric 
      buses, bike lanes, and pedestrian zones, reducing emissions and improving 
      quality of life in congested urban areas.
    `,
    tag: "Technology",
    stats: [
      { label: "Companies", value: "16" },
      { label: "Participants", value: "920" },
      { label: "Progress", value: "42%" },
      { label: "Target Year", value: "2027" },
    ],
    lat: 19.4326,
    lon: -99.1332, // Mexico City, Mexico
  },
  {
    id: "22",
    title: "Marine Protected Area Network",
    description: `
      Establishing interconnected marine sanctuaries spanning multiple countries, 
      protecting critical migration routes and breeding grounds for endangered 
      ocean species.
    `,
    tag: "Environment",
    stats: [
      { label: "Companies", value: "9" },
      { label: "Participants", value: "310" },
      { label: "Progress", value: "33%" },
      { label: "Target Year", value: "2029" },
    ],
    lat: 3.139,
    lon: 101.6869, // Kuala Lumpur, Malaysia
  },
  {
    id: "23",
    title: "Revolutionizing Technology Education",
    description: `
      By removing JavaFX from the student curriculum, we can finally teach students, what they need to succeedd in the real world.

      Long gone are the days of missery and pain, as we finally remove the last remnants of JavaFX from the curriculum.
    `,
    tag: "Education",
    stats: [
      { label: "Companies", value: "9" },
      { label: "Participants", value: "310" },
      { label: "Progress", value: "33%" },
      { label: "Target Year", value: "2029" },
    ],
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
