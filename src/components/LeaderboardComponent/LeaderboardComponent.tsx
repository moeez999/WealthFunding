import PeopleCard from "./PeopleCard";

const LeaderboardComponent = () => {
  const dummyData = [
    {
      index: "1",
      avatarImg: "https://i.pravatar.cc/317",
      name: "Wade Warren",
      number: "#35**93",
      amount: "$456.89",
    },
    {
      index: "2",
      avatarImg: "https://i.pravatar.cc/318",
      name: "Emma Smith",
      number: "#40**82",
      amount: "$789.54",
    },
    {
      index: "3",
      avatarImg: "https://i.pravatar.cc/319",
      name: "John Doe",
      number: "#25**67",
      amount: "$321.23",
    },
    {
      index: "4",
      avatarImg: "https://i.pravatar.cc/320",
      name: "Alice Johnson",
      number: "#18**45",
      amount: "$654.32",
    },
    {
      index: "5",
      avatarImg: "https://i.pravatar.cc/321",
      name: "Chris Thompson",
      number: "#29**78",
      amount: "$987.65",
    },
    {
      index: "6",
      avatarImg: "https://i.pravatar.cc/322",
      name: "Sophie Miller",
      number: "#31**23",
      amount: "$123.45",
    },
    {
      index: "7",
      avatarImg: "https://i.pravatar.cc/323",
      name: "David White",
      number: "#14**56",
      amount: "$876.54",
    },
    {
      index: "8",
      avatarImg: "https://i.pravatar.cc/324",
      name: "Emily Brown",
      number: "#22**89",
      amount: "$234.56",
    },
    {
      index: "9",
      avatarImg: "https://i.pravatar.cc/325",
      name: "Michael Davis",
      number: "#19**34",
      amount: "$567.89",
    },
    {
      index: "10",
      avatarImg: "https://i.pravatar.cc/326",
      name: "Olivia Wilson",
      number: "#27**12",
      amount: "$345.67",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-3">
      {dummyData.map((data, index) => (
        <PeopleCard
          key={index}
          index={data.index}
          avatarImg={data.avatarImg}
          name={data.name}
          number={data.number}
          amount={data.amount}
        />
      ))}
    </div>
  );
};

export default LeaderboardComponent;
