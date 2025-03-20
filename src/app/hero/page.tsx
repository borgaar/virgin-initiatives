"use client";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React, { useState, useEffect, createRef, forwardRef } from "react";

export default function Page() {
  const numberOfItems = 7;

  const items = Array.from({ length: numberOfItems }, (_, i) => ({
    id: i,
    imageUrl: `https://picsum.photos/id/${i + 10}/300/400`, // Replace with your image URLs
  }));

  return (
    <div className="wrapper flex h-screen items-center justify-center">
      <div className="flex gap-2">
        {items.map((item) => (
          <CarouselItem
            image={item.imageUrl}
            key={item.id}
            className="h-72 w-40 flex-col [&:hover_.the-text-content]:motion-preset-slide-up-lg hover:w-72"
          >
            <div className="h-full bg-gradient-to-b from-transparent via-black/70 to-black/70 p-2">
              <div className="the-text-content flex h-full flex-col justify-end gap-2">
                <h2 className="text-md text-white">
                  The Sea Turtle initiative
                </h2>
                <span className="text-xs text-white/60">
                  1200 sea trurtles saved
                </span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </div>
    </div>
  );
}

function CarouselItem(
  props: React.PropsWithChildren<{ image: string; className: string }>,
) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-secondary bg-cover transition-all duration-300 [&:not(:hover)]:grayscale [&:not(:hover)_>_*]:hidden",
        props.className,
      )}
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      {props.children}
    </div>
  );
}
