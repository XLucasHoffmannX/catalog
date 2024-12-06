import { AiOutlineProduct } from 'react-icons/ai';
import { LuListChecks, LuPieChart } from 'react-icons/lu';

import { managerRoutes } from '@/app/router/routes';

export const sidebarItems = {
  principalItems: [
    {
      title: 'Pedidos',
      url: managerRoutes.orders,
      icon: LuListChecks,
      items: [
        {
          title: 'Meus Pedidos',
          url: managerRoutes.orders
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
      icon: LuPieChart,
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
    }
  ]
};
