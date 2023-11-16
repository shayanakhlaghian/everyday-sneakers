const PrimaryHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='text-2xl md:text-3xl lg:text-4xl tracking-wide uppercase font-bold'>
      {children}
    </h1>
  );
};
export default PrimaryHeading;
