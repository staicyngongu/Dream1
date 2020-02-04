var phrases = [
	
	"Unlocking dreams....",
	
	"In the painting “Dream Caused by the Flight of a Bee Around a Pomegranate a Second Before Awakening” Dali incorporates realism, compositional genius, symbolism, and art historical allusion, ultimately culminating in a well rounded and model piece of Surrealist artwork.Though depicting a dream-realm filled with unrealistic and irrational settings and events, Dali grounds the work in a strong compositional framework. ", 
	
	"If the stimulus bears certain threat in reality, then in a dream it will take a threatening form that will provoke the awakening.", 
  
  "The subconscious signals that the insect can be dangerous, and the brain reacts by creating yellow and black images of the tigers that match the colors of the insect. Sharp claws and teeth symbolize the fear of the sting of an insect, so does a rifle, whose bayonet is about to thrust into the woman's hand. To protect herself from the sting the sleeping woman must wake up. ", 
	
	"Alice Robb explains that in lucid dreams, you become aware you’re dreaming. You can take control of the plot. They can be anything from a brief moment where you’re in a nightmare and tell yourself: “this is a dream” and wake up. That experience is fairly common.",
	
	"Some learn to lucid dream and unlock different layers. It is extremely cool and mind-bending when it happens to you – an alternate reality that feels real. When we’re dreaming, we’re thinking in a state we never have access to by day. Dreams offer the opportunity to think in a different way and show new answers to problems. ", 
	
	"Four out of five dreams are more negative than positive. The most common feelings in dreams are fear and anxiety. There is a difference between anxiety dreams and nightmares. Anxiety dreams can be helpful – one theory is that we are working through our anxieties and more able to see what stresses us during the day. ", 
	
	"Managing nightmares in sleep has been conveyed for hundreds of years through mythology. The baku, otherwise known as the ‘dream eater’, is a mythological being or spirit in Chinese and Japanese folklore which is said to devour nightmares.",
  
  "The baku cannot be summoned without caution, however, as ancient legends say that if the baku is not satisfied after consuming the nightmare, he may also devour one’s hopes and dreams. The baku can also be summoned for protection from bad dreams prior to falling asleep at night.",
	
	"To this day, it remains common for Japanese children to keep a baku talisman at their bedside.",
]

$("input").on("input", function (){
	
	var value= $(this).val()

	var phrase = phrases[value]
	
	$("div.phrase").html(phrase)
	
})