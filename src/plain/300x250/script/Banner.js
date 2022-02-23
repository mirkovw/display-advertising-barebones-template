import Animation from './Animation';

export default class Banner {

  constructor(config) {
    // add required components here
    this.config = config;
  }

  async init() {
    this.banner = document.body.querySelector('.banner');
    this.domMainExit = document.body.querySelector('.mainExit');

    this.domMainExit.addEventListener('click', this.handleClick);
    this.domMainExit.addEventListener('mouseover', this.handleRollOver);
    this.domMainExit.addEventListener('mouseout', this.handleRollOut);

    this.setAnimation(new Animation(document.querySelector('.banner')));
  }



  setAnimation(animation) {
    this.animation = animation.createTimeline({paused: true});
  }

  handleExit = () => {
    window.open(window.clickTag, '_blank');
    this.animation.getTimeline().progress(1);
  };

  /**
   * When client clicks this function will be triggerd.
   */
  handleClick = () => {
    this.handleExit();
  };

  /**
   * When mouse rolls over unit.
   */
  handleRollOver = () => {

  };

  /**
   * When mouse rolls out unit.
   */
  handleRollOut = () => {

  };

  async start() {
    await this.init();

   this.animation.play();
  }
}

