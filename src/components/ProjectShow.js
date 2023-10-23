function ProjectShow({ title, subtitle, demo, description, github }) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <div style={{ position: "relative", paddingBottom: "50%", height: 0 }}>
        <iframe
          src={demo}
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "50%",
          }}
        ></iframe>
      </div>
      <p>{ description }</p>
      <a href={ github }>view code here!</a>
    </div>
  );
}

export default ProjectShow;
