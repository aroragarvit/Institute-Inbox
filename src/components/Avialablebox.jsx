const Availablebox = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "729px",
        height: "161px",
        border: " 1px solid #E7E7E7",
        borderRadius: "4px",
        backgroundColor: "#FEFEFE",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "35px",
          alignItems: "center",
          marginLeft: "12px",
          marginTop: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "40px",
            height: "35px",
            borderRadius: "30px",
            backgroundImage: `url("https://pbs.twimg.com/media/FuurB47XsAMQobh?format=jpg&name=small")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            width: "auto",
            height: "14px",
            fontfamily: "montserrat",
            fontsize: "16px",
            fontWeight: "600",
            lineHeight: "14px",
            fontStyle: "normal",
            color: "#2E2C34",
            alignItems: "center",
            paddingLeft: "12px",
          }}
        >
          Hello my world
        </div>
      </div>
      <div style={{ display: "flex" }}>hhhhh</div>
    </div>
  );
};
export default Availablebox;
