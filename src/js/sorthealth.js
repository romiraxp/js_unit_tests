export default function sortHealth(listHealth) {
    return listHealth.sort((a, b) => b.health - a.health);
}