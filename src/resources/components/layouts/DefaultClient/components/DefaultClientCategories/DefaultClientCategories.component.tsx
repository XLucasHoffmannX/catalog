export function DefaultClientCategories(): JSX.Element {
  return (
    <div className='w-full shadow-md flex flex-col justify-center gap-2 mb-2 max-w-[900px] cursor-pointer bg-primary-foreground rounded-xl p-3'>
      <p className='text-muted-foreground font-bold'>Categorias</p>
      <div className='flex items-center gap-3 overflow-x-auto'>
        {Array.from({ length: 20 }).map((cate, index) => (
          <div
            className='flex flex-col justify-center items-center w-[120px] text-muted-foreground pb-3 hover:bg-secondary-foreground p-2 rounded-sm '
            key={index}
          >
            <div className='rounded-full w-[60px] h-[60px] border bg-primary'></div>
            <p className='max-w-[120px] truncate'>Categoria {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
