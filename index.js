function distanceFromHqInBlocks(a){
    if (a < 42){
        return (42 - a)
    } else {
        return (a - 42)
    }
}

function distanceFromHqInFeet(a){
    if (a < 42){
        return ((42 - a) * 264)
    } else {
        return ((a - 42) * 264)
    }
}

function distanceTravelledInFeet(a, b){
    if (a < b){
        return ((b - a) * 264)
    } else {
        return ((a - b) * 264)
    }
}


function calculatesFarePrice(a, b){
    if (a < b){
        if (((b - a) * 264) < 400){
            return (0)
        } else if (((b - a) * 264) < 2000){
            return (((b - a) * 264-400) * 0.02)
        } else if (((b - a) * 264) < 2500){
            return (25)
        } else if (((b - a) * 264) >= 2500){
            return ('cannot travel that far')
        }
    } else if (a > b){
        if (((a - b) * 264) < 400){
            return (0)
        } else if (((a - b) * 264) < 2000){
            return (((a - b) * 264-400) * 0.02)
        } else if (((a - b) * 264) < 2500){
            return (25)
        } else if (((a - b) * 264) >= 2500){
            return ('cannot travel that far')
        }
    }
}



