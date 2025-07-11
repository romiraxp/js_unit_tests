export default function calculateHealth(health) {
    if (health > 50 && health <= 100) {
        return 'healthy';
    }

    if (health >= 15 && health <=50 ) {
        return 'wounded';
    } 

    if (health > 0 && health < 15) {
        return 'critical';
    } 

    if (health == 0) {
        return 'dead';
    } 
} 