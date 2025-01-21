import { colors } from "@/theme/colors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center" style={{ backgroundColor: colors.black}}>
      <h1 style={{ color: colors.white}}>Teste de Cores</h1>
    </div>
  );
}
