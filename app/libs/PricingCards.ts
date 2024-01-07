interface IPricingCard {
    price: number;
    title: string;
    benefits: string[];
    id: number;
    oneliner: string;
}

const pricingCards: IPricingCard[] = [
    {
        price: 49,
        title: "Insightful Pro",
        benefits: [
            "Pontuação preditiva de leads",
            "Criação de conteúdo automatizada",
            "Mensagens personalizadas em escala",
            "Ferramentas de retenção de clientes",
        ],
        id: 1,
        oneliner: "Ferramentas de vendas impulsionadas por IA para crescimento de receita focado"
    },
    {
        price: 99,
        title: "Insightful Enterprise",
        benefits: [
            "Tudo no nível Pro, e:",
            "Recomendações orientadas por dados",
            "Fluxos de trabalho de vendas personalizáveis",
            "Alertas e notificações em tempo real",
        ],
        id: 2,
        oneliner: "Otimização abrangente de vendas para ganhos acelerados de receita"
    },
]

export default pricingCards;
