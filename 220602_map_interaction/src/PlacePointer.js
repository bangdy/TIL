import Box from "@mui/material/Box";

const PlacePointer = (props) => {
  const { text, selected } = props;

  if (selected) {
    return (
      <div
        style={{
          border: "1px dashed grey",
          backgroundColor: "yellow",
          width: "fit-content",
          height: "fit-content",
          display: "inline-block",
          position: "relative",
          top: -40
        }}
      >
        <p style={{ width: "max-content", padding: "0 20px" }}>{text}</p>
      </div>
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
