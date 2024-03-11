import * as ingredients from './ingredientsService'

export const services = {
    ingredients,

    storage: {
        imagePath:
            "https://marfiqtchnknzwxizvnv.supabase.co/storage/v1/object/public/ingredients"  // URL pode ter expirado pegar no supabase storage uma nova URL
    }
}