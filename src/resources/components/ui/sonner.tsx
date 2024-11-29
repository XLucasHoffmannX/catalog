import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterPropsType = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterPropsType) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterPropsType['theme']}
      className='toaster group'
      {...props}
    />
  );
};

export { Toaster };
