import * as React from 'react';

import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2
} from 'lucide-react';
import { AiOutlineProduct } from 'react-icons/ai';
import { LuListChecks } from 'react-icons/lu';

import { managerRoutes } from '@/app/router/routes/manager/managerRoutes.constant';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/resources/components/ui';

import { NavMain, NavUser, StoreSwitcher } from '../';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
  navMain: [
    {
      title: 'Pedidos',
      url: '#',
      icon: LuListChecks,
      items: [
        {
          title: 'Meus Pedidos',
          url: '/orders'
        },
        {
          title: 'Histórico',
          url: '#'
        }
      ]
    },
    {
      title: 'Produtos',
      url: managerRoutes.products,
      icon: AiOutlineProduct,
      items: [
        {
          title: 'Meus produtos',
          url: managerRoutes.products
        },
        {
          title: 'Adicionar novo produto',
          url: managerRoutes.addProduct
        }
      ]
    },
    {
      title: 'Empresa',
      url: managerRoutes.manage,
      icon: PieChart,
      items: [
        {
          title: 'Gerenciar',
          url: managerRoutes.manage
        },
        {
          title: 'Lojas',
          url: managerRoutes.manageStore
        },
        {
          title: 'Adicionar Loja',
          url: managerRoutes.manageAddStore
        },
        {
          title: 'Histórico',
          url: '#'
        }
      ]
    },
    {
      title: 'Configurações',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Integrações',
          url: '#'
        },
        {
          title: 'Pagamentos',
          url: '#'
        }
      ]
    }
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map
    }
  ]
};
export function ManageAppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible='icon'
      {...props}
    >
      <SidebarHeader>
        <StoreSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />

        {/* <NavArea projects={data.projects} /> */}
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
