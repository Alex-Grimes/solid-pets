import { cutePets, setCutePets } from "../pages/LikedPets";

const likedPet = (pet) => {
    setCutePets([pet, ...cutePets()]);
}

const unlikePet = (petId) => {
    const petState = cutePets()?.filter(item => item.id !== petId)
    setCutePets(petState)
  }

const petIsCute = (petId) => {
    const pet = cutePets()?.filter(item => item.id === petId)
    return pet?.length > 0
}





const PetCard = ({pet}) => {
    return (
      <div class="card mb-3">
        <div class="card-header">Pet Name is {pet.name} a {pet.animal}</div>
        <div class="card-body">
          <p>{pet.city}, {pet.state}</p>
          <p class="card-text">{pet.description}</p>
        </div>
        <div class="card-footer">
        {petIsCute(pet.id) ? (
            <button class="btn btn-danger" onclick={() => unlikePet(pet.id)}>
              Unlike
            </button>
          ) : (
            <button class="btn btn-primary" onclick={() => likedPet(pet)}>
              Like
            </button>
          )}
        </div>
      </div>
    )
}
export default PetCard;