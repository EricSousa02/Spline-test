import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard {
    title: string;
    icon: LucideIcon;
    bodyText: string;
    id: number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Aumento nas Vendas",
        bodyText: "As análises preditivas do Insightful identificam prospects de alto valor para abordagens direcionadas, impulsionando as taxas de conversão e vendas em até 20%.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Sem Tempo Desperdiçado",
        bodyText: "O Insightful automatiza a criação de conteúdo personalizado, liberando o tempo dos representantes de vendas para atividades focadas em receita e aumento da produtividade.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Redução na Rotatividade",
        bodyText: "As ferramentas de engajamento e renovação de leads da IA do Insightful reduzem a rotatividade de clientes em até 30% por meio de abordagens consistentes e oportunidades de retenção.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards;
