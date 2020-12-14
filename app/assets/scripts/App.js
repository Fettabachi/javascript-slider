import "../styles/styles.css";
import Slider from "./modules/Slider";

new Slider({
    autoPlayOn: true,
    transitionTime: 3000
});

if (module.hot) {
    module.hot.accept();
}
  