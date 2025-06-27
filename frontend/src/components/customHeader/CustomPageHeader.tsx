import "./CustomPageHeader.scss";

export const CustomPageHeader = ({ handleCollapsedChange }) => {
  return <button onClick={handleCollapsedChange}>Toggle Sidebar</button>;
};
