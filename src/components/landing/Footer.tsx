import Image from "next/image";

function Footer() {
    const date = new Date().getFullYear();
  return (
    <footer className="px-6 py-12 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo DentWise"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-lg">DentWise</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Assistance dentaire par IA qui apporte de vrais conseils utiles.
            </p>
          </div>

          {/* Produit */}
          <div>
            <h4 className="font-medium mb-3">Produit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Comment ça fonctionne
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Centre d’aide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contactez-nous
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Statut
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-medium mb-3">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Sécurité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; { date} DentWise. Conçu pour de vraies personnes avec de vraies questions dentaires.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
