import { CreditCard, Earth, Landmark, LayoutList, Lock, Settings, Star, UserPen } from "lucide-react";

export const dataSidebarElements = [
    {
        title: "Cuentas",
        icon: LayoutList,
        children: [
            {
                item: 'Favoritos',
                href: '/favourites',
                icon: Star
            },
            {
                item: 'Cuentas online',
                href: '/logins-elements',
                icon: Earth
            },
            {
                item: 'Tarjetas',
                href: '/credit-card',
                icon: CreditCard
            },
        ]
    },
];

export const dataSidebarConfiguration = [
    {
        title: "Configuración",
        icon: Settings,
        children: [
            {
                item: 'Profile',
                href: '/profile',
                icon: UserPen,
                premium: false,
            },
            {
                item: 'Security',
                href: '#',
                icon: Lock,
                premium: true,
            },
            {
                item: 'Suscription',
                href: '#',
                icon: Landmark,
                premium: true,
            },
        ]
    },
];