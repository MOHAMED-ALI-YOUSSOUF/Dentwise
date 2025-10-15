import Navbar from "@/components/Navbar";
import { PricingTable } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { CrownIcon } from "lucide-react";
import { redirect } from "next/navigation";

async function ProPage() {
  const user = await currentUser();

  if (!user) redirect("/");

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Section de mise à niveau */}
        <div className="mb-12 overflow-hidden">
          <div className="flex items-center justify-between bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 border border-primary/20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Passez au plan Pro</span>
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2">Débloquez les soins dentaires IA Premium</h1>
                <p className="text-muted-foreground">
                  Profitez de consultations illimitées avec l’IA, de fonctionnalités avancées et
                  d’un support prioritaire pour améliorer votre santé dentaire.
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <CrownIcon className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Section des tarifs */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Choisissez votre abonnement</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sélectionnez le plan idéal pour vos besoins en soins dentaires. Tous les plans
              incluent un accès sécurisé et un chiffrement de niveau bancaire.
            </p>
          </div>

          <PricingTable />
        </div>
      </div>
    </>
  );
}

export default ProPage;
