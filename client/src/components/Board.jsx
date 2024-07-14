import Pin from "./Pin";

const Board = () => {
  return (
    <>
      <section className="flex-1 absolute left-1/2 w-[90vw] justify-center grid mt-8 grid-cols-auto-fill-100 auto-rows-[10px] translate-x-[-50%]">
        <Pin pinSize="small" />
        <Pin pinSize="medium" />
        <Pin pinSize="large" />
        <Pin pinSize="small" />
        <Pin pinSize="medium" />
        <Pin pinSize="large" />
        <Pin pinSize="small" />
        <Pin pinSize="medium" />
        <Pin pinSize="large" />
        <Pin pinSize="small" />
        <Pin pinSize="medium" />
        <Pin pinSize="large" />
      </section>
    </>
  );
};

export default Board;
