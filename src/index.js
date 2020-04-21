export class About {
    desc;
    target;
    constructor(desc, target) {
        this.desc = desc;
        this.target = target;
        this.init();
    }
    init(){
        this.target.innerHTML = this.desc;
    }
}
export class Charts{
    svgParams;
    svg;
    targets;
    constructor(targets, svgParams, svg){
        this.targets = targets;
        this.svgParams = svgParams;
        this.svg = svg;
        this.init();
    }
    init(){
        this.targets.forEach((t, i) => {
            t.innerHTML = this.svg.create(this.svgParams[i]);
        });
    }
}