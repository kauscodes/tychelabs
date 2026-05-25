import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnimatedHeroProps {
  eyebrow?: string;
  staticText?: string;
  titles?: string[];
  subtitle?: string;
  primaryCta?: {
    label: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    label: string;
    onClick?: () => void;
  };
}

function Hero({
  eyebrow = "Read our launch article",
  staticText = "This is something",
  titles: titleOptions,
  subtitle = "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.",
  primaryCta = { label: "Sign up here" },
  secondaryCta = { label: "Jump on a call" },
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => titleOptions ?? ["amazing", "new", "wonderful", "beautiful", "smart"],
    [titleOptions],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 px-5 py-20 lg:py-32">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              {eyebrow} <MoveRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="max-w-4xl text-center font-display text-5xl font-normal uppercase leading-[0.95] tracking-tight text-black md:text-7xl">
              <span>{staticText}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-teal-500"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="max-w-3xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline" onClick={secondaryCta.onClick}>
              {secondaryCta.label} <PhoneCall className="h-4 w-4" />
            </Button>
            <Button size="lg" className="gap-4" onClick={primaryCta.onClick}>
              {primaryCta.label} <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
