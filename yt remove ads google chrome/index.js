document.addEventListener('DOMContentLoaded',() =>{
    window.onload = () =>{  
      let playBack = 1;
    setInterval(()=>{
    
        let ad = document.querySelector('.video-ads.ytp-ad-module');
        let video = document.querySelector('.video-stream.html5-main-video')
        if(ad === undefined){
            playBack = video.playbackRate;
        }
        let closeAd = document.getElementsByClassName("ytp-ad-overlay-close-button");
        for(let i=0;i<closeAd.length;i++){
            closeAd[i].click();
        }
        if(document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text')){        
        let skipBtn = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
        skipBtn.click()
     }
    
     if(document.querySelector(".style-scope.ytd-companion-slot-renderer")){
        document.querySelector(".style-scope.ytd-companion-slot-renderer").style.display = 'none';
     }
    
     if(ad!==undefined){
        if(document.querySelector(".ytp-ad-text.ytp-ad-preview-text-modern")){
            video.playbackRate = 16;
        }
    }},100)
    }})
    