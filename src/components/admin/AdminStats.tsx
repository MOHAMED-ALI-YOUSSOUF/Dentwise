import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, UserCheck, Clock } from "lucide-react";

interface AdminStatsProps {
  totalDoctors: number;
  activeDoctors: number;
  totalAppointments: number;
  completedAppointments: number;
}

function AdminStats({
  activeDoctors,
  totalDoctors,
  completedAppointments,
  totalAppointments,
}: AdminStatsProps) {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-12">
      {/* Total Médecins */}
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Users className="size-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{totalDoctors}</div>
              <div className="text-sm text-muted-foreground">Médecins au total</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Médecins actifs */}
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <UserCheck className="size-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{activeDoctors}</div>
              <div className="text-sm text-muted-foreground">Médecins actifs</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Total Rendez-vous */}
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Calendar className="size-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{totalAppointments}</div>
              <div className="text-sm text-muted-foreground">Rendez-vous totaux</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rendez-vous complétés */}
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Clock className="size-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{completedAppointments}</div>
              <div className="text-sm text-muted-foreground">Rendez-vous complétés</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminStats;
