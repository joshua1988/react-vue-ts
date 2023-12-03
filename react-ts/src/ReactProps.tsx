interface AppHeaderProps {
  headerTitle: string;
}

// type AppHeaderProps = { headerTitle: string };

function AppHeader(props: AppHeaderProps) {
  return <h1>{props.headerTitle}</h1>;
}

export default AppHeader;
