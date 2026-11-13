import DebtCard from "@/components/DebtCard";

function Debts() {
  const debts = [
    {
      prestador: "Fontenele e Bonfim",
      paid: 100.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
    {
      prestador: "Fontenele e Bonfim",
      paid: 12.0,
      total: 100.0,
      descricao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam
        ex excepturi doloribus corrupti nesciunt voluptatem adipisci, tenetur ea
        earum sit voluptas minus nihil placeat, itaque tempora. Inventore, nemo.
        Enim!`,
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 min-h-0 flex-1 gap-4 px-8 py-2">
        {debts.map((v) => (
          <DebtCard debt={v} />
        ))}
      </div>
    </>
  );
}

export default Debts;
