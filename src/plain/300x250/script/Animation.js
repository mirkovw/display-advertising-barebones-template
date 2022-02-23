export default class Animation {

  constructor(container) {
    this.container = container;
  }

  createTimeline(obj) {
    const tl = gsap.timeline(obj);
    tl.to('.content', {duration:1, opacity: 1})

    return tl;
  }
}
