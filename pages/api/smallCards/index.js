import shortId from "short-id";
export default function cards(req, res) {
  res.status(200).json([
    {
      id: shortId.generate(),
      image:
        "https://images.unsplash.com/photo-1653299356349-b78265fc5beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      location: "London",
      distance: "14 hour - drive",
    },
    {
      id: shortId.generate(),
      image:
        "https://images.unsplash.com/photo-1664990104456-bf938594b9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      location: "Egypt",
      distance: "21 hour - drive",
    },
    {
      id: shortId.generate(),
      image:
        "https://images.unsplash.com/photo-1566237240917-13a17839f906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      location: "Paris",
      distance: "3 hour - drive",
    },
    {
      id: shortId.generate(),
      image:
        "https://images.unsplash.com/photo-1557846866-1044ce05700b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      location: "Italy",
      distance: "14 hour - drive",
    },
    {
      id: shortId.generate(),
      image:
        "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      location: "France",
      distance: "53 hour - drive",
    },
    {
      id: shortId.generate(),
      image:
        "https://images.unsplash.com/photo-1573143950521-36ef5345dae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      location: "New York",
      distance: "4 minute - drive",
    },
    {
      id: shortId.generate(),
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
      location: "Japan",
      distance: "12 hour - drive",
    },
    {
      id: shortId.generate(),
      image:
        "https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      location: "China",
      distance: "2 hour - drive",
    },
  ]);
}
