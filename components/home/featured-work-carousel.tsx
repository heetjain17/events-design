"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export interface FeaturedWorkItem {
  title: string
  button: string
  src: string
}

export interface FeaturedWorkCarouselProps {
  items: FeaturedWorkItem[]
}

export default function FeaturedWorkCarousel({ items }: FeaturedWorkCarouselProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    const updateSelection = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }
    updateSelection()
    carouselApi.on("select", updateSelection)
    return () => {
      carouselApi.off("select", updateSelection)
    }
  }, [carouselApi])

  return (
    <div className="w-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: "center",
          loop: true,
          breakpoints: {
            "(max-width: 768px)": {
              dragFree: true,
            },
          },
        }}
      >
        <CarouselContent className="ml-0">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] md:basis-[70vmin] pl-4 md:pl-6"
              onClick={() => carouselApi?.scrollTo(index)}
            >
              <motion.div
                className="relative h-[70vmin] w-full rounded-sm overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, 70vmin"
                    />
                  </motion.div>
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10 dark:from-background/90 dark:via-background/40 dark:to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <motion.h3
                    className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <button className="px-6 py-3 w-fit text-sm bg-primary text-white rounded hover:scale-105 transition duration-200">
                    {item.button}
                  </button>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-8 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-primary" : "bg-primary/20"
            }`}
            onClick={() => carouselApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
