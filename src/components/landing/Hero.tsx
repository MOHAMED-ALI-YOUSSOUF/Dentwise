import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-10 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-10 text-center lg:text-left">
              <div className="space-y-6">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">
                    Assistant dentaire propulsé par l’IA
                  </span>
                </div>

                {/* MAIN HEADING */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Vos questions
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    dentaires
                  </span>
                  <br />
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    répondues instantanément
                  </span>
                </h1>

                {/* SUBTITLE */}
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  Discutez avec notre assistant dentaire IA pour obtenir des conseils instantanés,
                  prenez des rendez-vous intelligents et recevez des recommandations personnalisées.
                  Disponible 24h/24, 7j/7.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <SignUpButton mode="modal">
                  <Button size="lg" className="w-full sm:w-auto">
                    <MicIcon className="mr-2 size-5" />
                    Essayer l’agent vocal
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <CalendarIcon className="mr-2 size-5" />
                    Prendre rendez-vous
                  </Button>
                </SignUpButton>
              </div>

              {/* USER TESTIMONIALS */}
              <div className="pt-8">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  {/* USER AVATARS */}
                  <div className="flex -space-x-3">
                    {[
                      "photo-1544005313-94ddf0286df2",
                      "photo-1560250097-0b93528c311a",
                      "photo-1580489944761-15a19d654956",
                      "photo-1633332755192-727a05c4013d",
                      "photo-1598300042247-d088f8ab3a91",
                    ].map((id, index) => (
                      <Image
                        key={index}
                        src={`https://images.unsplash.com/${id}?w=100&h=100&fit=crop&crop=face`}
                        alt={`User ${index + 1}`}
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-4 ring-background"
                      />
                    ))}
                  </div>

                  {/* RATING AND STATS */}
                  <div className="text-center sm:text-left space-y-1">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-foreground">4.9/5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Fiable pour{" "}
                      <span className="font-semibold text-foreground">
                        1 200+ patients
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative lg:pl-8 mt-10 lg:mt-0">
              <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              <Image
                src="/hero.png"
                alt="DentWise AI"
                width={600}
                height={600}
                className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
