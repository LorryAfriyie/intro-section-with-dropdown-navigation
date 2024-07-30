const FeatureDropdownMenu = () => {
  const featureDropdownItems = [
    { name: "Todo List", img: "images/icon-todo.svg" },
    { name: "Calendar", img: "images/icon-calendar.svg" },
    { name: "Reminder", img: "images/icon-reminders.svg" },
    { name: "Planning", img: "images/icon-planning.svg" },
  ];

  return (
    <div className="dropdown__dropdown-menu">
      <ul>
        {featureDropdownItems.map((x, index) => {
          return (
            <li key={index}>
              <img src={x.img} alt={x.img} />
              <a href="#">{x.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CompanyDropdownMenu = () => {
  const companyDropdownItems = [
    { name: "History" },
    { name: "Our Team" },
    { name: "Blog" },
  ];

  return (
    <div className="dropdown__dropdown-menu">
      <ul>
        {companyDropdownItems.map((x, index) => {
          return (
            <li key={index}>
              <a href="#">{x.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { FeatureDropdownMenu, CompanyDropdownMenu };
