import Form from "@/components/form";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-blue-300 py-24">
      <h1 className="text-xl font-medium capitalize text-center sm:text-3xl md:text-3xl">
        Multistep React Hook Form
      </h1>
      <div className="container">
        <Form />
      </div>
    </section>
  );
}
