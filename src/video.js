function vjs(videoData){
    //videoData contains different data
    //source for video and subtitle
    //normal control or extended
    // start time, end time

    var status = {
        val: true,
        log: "",
    };
    if(!videoData.containerID) {
        status.val =  false;
        status.log = "<Compilation error> No container provided";
    }

    if(!status.val){
        console.error("Video JS error: " + status.log);
        return false;
    }
    var vid = {};
    vid.startTime = videoData.startTime ? videoData.startTime : 0;
    vid.extendedControl = videoData.extendedControl ? videoData.controlType : false;
    vid.containerID  = videoData.containerID;


    

}