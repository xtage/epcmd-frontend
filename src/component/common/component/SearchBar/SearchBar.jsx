import { ActionIcon, TextInput, Button } from "@mantine/core";
import { Search } from "lucide-react";

function SearchBar(props) {
  return (
    <TextInput
      radius={props.radius || "xl"}
      size={props.size}
      w={"100%"}
      placeholder={props.placeholder || "Search"}
      rightSectionWidth={"auto"}
      rightSectionProps={{
        style: { cursor: "pointer", padding: "6px" },
      }}
      rightSection={
        <Button
          bg={"black"}
          leftSection={<Search size={16} />}
          radius={"lg"}
          size="xs"
        >
          Search
        </Button>
      }
      {...props}
    />
  );
}

export default SearchBar;
