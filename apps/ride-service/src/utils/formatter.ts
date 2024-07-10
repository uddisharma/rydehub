
export function formatTimeDuration(durationInSeconds: number): string {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);

    if (hours > 0) {
        return `${hours} hr ${minutes} min`;
    } else {
        return `${minutes} min`;
    }
}


export function formatDistance(distanceInMeters: number): string {
    const distanceInKm = distanceInMeters / 1000;
    return `${distanceInKm.toFixed(2)} km`;
}


