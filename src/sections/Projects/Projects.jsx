import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import logo from "../../assets/logo.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://ebasnet.github.io/Musify/"
          h3="Musify"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/ebasnet/foodel"
          h3="Food Del"
          p=" food Delivery website"
        />
        <ProjectCard
          src={logo}
          link="https://github.com/ebasnet/e-shop"
          h3="E-shop"
          p="GEcommerce website"
        />
      </div>
    </section>
  );
}

export default Projects;
