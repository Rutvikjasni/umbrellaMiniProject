function minFlightsToGoal(fuel) {
    let n = fuel.length;
    if (n === 0) return -1;
    
    let totalPlanesUsed = 0; 
    let farthestReach = 0;
    let previousMaxReach = 0; 
    
    for (let i = 0; i < n - 1; i++) {
        farthestReach = Math.max(farthestReach, i + fuel[i]); // Update max reachable airport
        
        if (i === previousMaxReach) { // If we reach the limit of the current plane
            totalPlanesUsed++;
            previousMaxReach = farthestReach; // Hire a new plane and extend range
            
            if (previousMaxReach >= n - 1) return totalPlanesUsed; // If we can reach the last airport
        }
    }
    
    return previousMaxReach >= n - 1 ? totalPlanesUsed : -1; // Check if reaching last airport is possible
}

console.log(minFlightsToGoal([2, 1, 2, 3, 1])); // Output: 2
// console.log(minPlanesToReachEnd([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3  