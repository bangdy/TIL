import Box from "@mui/material/Box";

const PlacePointer = (props) => {
  const { text, selected } = props;

  if (selected) {
    return (
      <Box
        sx={{
          p: 2,
          border: "1px dashed grey",
          width: 50,
          backgroundColor: "yellow"
        }}
      >
        {text}
      </Box>
    );
  } else {
    return (
      <Box
        sx={{ width: 20, height: 20, borderRadius: 10, backgroundColor: "red" }}
        onClick={props.onClick}
      >
        {" "}
      </Box>
    );
  }
};

export default PlacePointer;
