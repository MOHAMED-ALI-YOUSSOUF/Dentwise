import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section className="relative py-32 px-6 outline-hidden z-10 max-w-7xl mx-auto">
      {/* EN-TÊTE */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">Processus simple</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Trois étapes pour
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            une meilleure santé dentaire
          </span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Notre processus simplifié rend les soins dentaires accessibles, pratiques et sans stress
          pour tout le monde.
        </p>
      </div>

      {/* ÉTAPES */}
      <div className="relative">
        {/* LIGNE DE CONNEXION */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* ÉTAPE 1 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              {/* Numéro d’étape */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                1
              </div>

              {/* Icône */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/audio.png" alt="Chat vocal" width={40} height={40} className="w-14" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">Posez vos questions</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Discutez avec notre assistant IA de vos préoccupations dentaires. Obtenez des
                réponses instantanées sur les symptômes, les traitements et les conseils de santé
                bucco-dentaire.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Disponible 24h/24
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Réponse instantanée
                </span>
              </div>
            </div>
          </div>

          {/* ÉTAPE 2 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                2
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/brain.png" alt="Cerveau IA" width={40} height={40} className="w-14" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">Recevez des conseils d’expert</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Recevez des recommandations personnalisées basées sur des milliers de cas dentaires.
                Notre IA fournit des conseils dignes d’un professionnel.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Propulsé par l’IA
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Personnalisé
                </span>
              </div>
            </div>
          </div>

          {/* ÉTAPE 3 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                3
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image src="/calendar.png" alt="Calendrier" width={40} height={40} className="w-14" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">Réservez & recevez des soins</h3>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Prenez rendez-vous avec des dentistes vérifiés et bénéficiez d’un suivi complet.
                Suivez vos progrès en toute simplicité.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Dentistes vérifiés
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Suivi personnalisé
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOUTON D’APPEL À L’ACTION */}
      <div className="text-center mt-16">
        <SignUpButton mode="modal">
          <Button size="lg">
            <ArrowRightIcon className="mr-2 size-5" />
            Commencer maintenant
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
