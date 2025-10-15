import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckCircleIcon } from "lucide-react";

function Pricing() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background via-muted/3 to-background">
      {/* Fond avec motif en grille */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] opacity-20"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Tarification simple</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choisissez votre
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              plan dentaire IA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Réservez vos rendez-vous gratuitement et passez à une formule illimitée pour des
            consultations dentaires IA 24h/24. Parfait pour un suivi régulier.
          </p>
        </div>

        {/* Cartes de prix */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Gratuit */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Gratuit</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">0 FDJ</span>
                    <span className="text-muted-foreground mb-1">/mois</span>
                  </div>
                  <p className="text-muted-foreground">
                    Réservation de rendez-vous essentielle
                  </p>
                </div>
                <SignUpButton mode="modal">
                  <Button className="w-full py-3 bg-gradient-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
                    Commencer gratuitement
                  </Button>
                </SignUpButton>

                <div className="space-y-4">
                  <Feature text="Réservation de rendez-vous illimitée" />
                  <Feature text="Trouvez des dentistes près de chez vous" />
                  <Feature text="Assistance par chat basique" />
                  <Feature text="Rappels automatiques de rendez-vous" />
                </div>
              </div>
            </div>
          </div>

          {/* Plan IA Basique - Populaire */}
          <div className="relative group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Le plus populaire
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-card/95 to-card/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20 scale-105">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">IA Basique</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      1 600 FDJ
                    </span>
                    <span className="text-muted-foreground mb-1">/mois</span>
                  </div>
                  <p className="text-muted-foreground">
                    Consultations IA + réservation de rendez-vous
                  </p>
                </div>

                <Button className="w-full py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Commencer le plan Basique
                </Button>

                <div className="space-y-4">
                  <Feature text="Tout ce qui est inclus dans Gratuit" />
                  <Feature text="10 appels vocaux IA par mois" />
                  <Feature text="Conseils dentaires personnalisés" />
                  <Feature text="Évaluation des symptômes" />
                  <Feature text="Support prioritaire" />
                  <Feature text="Historique et enregistrements d’appels" />
                </div>
              </div>
            </div>
          </div>

          {/* Plan IA Pro */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">IA Pro</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">3 400 FDJ</span>
                    <span className="text-muted-foreground mb-1">/mois</span>
                  </div>
                  <p className="text-muted-foreground">Consultations IA illimitées</p>
                </div>

                <Button
                  variant="outline"
                  className="w-full py-3 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 rounded-xl font-semibold transition-all duration-300"
                >
                  Passer à IA Pro
                </Button>

                <div className="space-y-4">
                  <Feature text="Tout ce qui est inclus dans IA Basique" />
                  <Feature text="Appels vocaux IA illimités" />
                  <Feature text="Analyse dentaire IA avancée" />
                  <Feature text="Plans de soins personnalisés" />
                  <Feature text="Assistance IA prioritaire 24h/24" />
                  <Feature text="Rapports de santé détaillés" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

export default Pricing;
