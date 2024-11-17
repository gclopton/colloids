
# 4. Surface Thermodynamics

4.1 Surface Tension - Thermo

This section outlines the thermodynamic relationships that connect surface tension, Gibbs free energy, and entropy, particularly how surface tension changes with temperature. Let's go through this step by step to clarify the physical meaning behind each equation.

1. Entropy of the Surface vs. Bulk:

It is generally true that the surface entropy $S_{\text{surface }}$ is greater than the bulk entropy $S_{\text{bulk }}$. This happens because molecules at the surface have more degrees of freedom compared to those in the bulk. Molecules at the interface can interact with both the liquid phase and the surrounding phase (e.g., air), which allows for greater configurational entropy.


2. Gibbs Free Energy:

The Gibbs free energy $G$ is a thermodynamic potential that gives insight into the equilibrium properties of a system at constant pressure $p$ and temperature $T$. It is defined as:

$$\begin{equation*}
G(p,T)=U+pV-TS
\end{equation*}$$

where:
- $U$ is the internal energy,
- $pV$ represents the mechanical work done by the system due to volume changes,
- $TS$ is the term related to the system's entropy at temperature $T$.

Alternatively, the Gibbs free energy can also be written in terms of the enthalpy $H=U+pV$ :

$$\begin{equation*}
G(p,T)=H-TS
\end{equation*}$$

3. Differential Form of Gibbs Free Energy:

The differential form of the Gibbs free energy can be derived as follows:

$$\begin{equation*}
dG=dU+pdV+Vdp-TdS-SdT
\end{equation*}$$


Substituting $dU=TdS-pdV+\sum _{i} \mu _{i} dN_{i}$ (the first law of thermodynamics), the differential becomes:

$$\begin{equation*}
dG=Vdp-SdT+\sum _{i} \mu _{i} dN_{i}
\end{equation*}$$


Now, assuming:
- No pressure change $(dp=0)$,
- No chemical reactions $( dN_{i} =0)$,
the expression simplifies to:

$$\begin{equation*}
dG=-SdT
\end{equation*}$$


This tells us how the Gibbs free energy changes with temperature at constant pressure.


4. Surface Gibbs Free Energy:

For a system with an interface, the Gibbs free energy also includes a surface energy term. The Gibbs free energy can be written as:

$$\begin{equation*}
G=\gamma \cdot A
\end{equation*}$$

where:
- $\gamma$ is the surface tension (the energy per unit area of the surface),
- $A$ is the surface area.

Taking the differential of this expression gives:

$$\begin{equation*}
dG=d(\gamma A)=Ad\gamma +\gamma dA
\end{equation*}$$


Now, under the assumption that the surface area does not change (i.e., $dA=0$ ):

$$\begin{equation*}
dG=Ad\gamma 
\end{equation*}$$


This shows that the change in Gibbs free energy depends on the change in surface tension $d\gamma $.


5. Relationship Between Surface Tension and Temperature:

Since we already know that $dG=-SdT$, we can set this equal to the expression derived for the surface:

$$\begin{equation*}
Ad\gamma =-SdT
\end{equation*}$$


Solving for $d\gamma /dT$, the change in surface tension with respect to temperature:

$$\begin{equation*}
\frac{d\gamma }{dT} =-\frac{S}{A}
\end{equation*}$$


This shows that the rate of change of surface tension with temperature is related to the entropy per unit area.


6. Surface vs. Bulk Entropy:

Finally, by recognizing that the total entropy $S$ in this expression is the difference between the entropy of the surface and the bulk, we can write:

$$\begin{equation*}
\frac{d\gamma }{dT} =-\frac{S_{\text{surface }} -S_{\text{bulk }}}{A}
\end{equation*}
$$

This indicates that the change in surface tension with temperature depends on how much more entropy the surface has compared to the bulk. Since $S_{\text{surface }}  >S_{\text{bulk }}$, the surface tension generally decreases as the temperature increases. This makes sense physically because as temperature rises, the increased molecular motion at the interface lowers the cohesive forces that give rise to surface tension.

Summary of Key Insights:
- Surface entropy is generally greater than bulk entropy because molecules at the surface have more freedom.
- The Gibbs free energy is a useful thermodynamic potential for systems at constant pressure and temperature, and its differential form shows how it changes with temperature.
- The change in surface tension with temperature is linked to the difference in entropy between the surface and bulk.
- As temperature increases, surface tension decreases due to the enhanced molecular motion at the surface, which disrupts the cohesive forces that maintain the interface.


Surface Tension and Temperature:

For most liquids, the entropy of the surface $S_{\text{surface }}$ is greater than that of the bulk $S_{\text{bulk, }}$, which leads to the general relationship:

$$\begin{equation*}
\frac{d\gamma }{dT} < 0
\end{equation*}$$


This means that surface tension $\gamma $ decreases as temperature $T$ increases. This is consistent with the idea that increasing thermal motion (entropy) weakens the cohesive forces between molecules at the surface, thus reducing the energy per unit area (surface tension).


![[Screenshot 2024-10-22 at 17.19.33.png|500]]


Scaling Theory and Critical Temperature

As temperature approaches the critical temperature $T_{c}$, the surface tension tends to zero. Near the critical point, the liquid and gas phases become indistinguishable, so the concept of an interface (and therefore surface tension) vanishes. The relationship between surface tension and temperature near the critical point can be described by the scaling theory:


$$\begin{equation*}
\gamma (T)=\gamma _{0}\left( 1-\frac{T}{T_{c}}\right)^{N}
\end{equation*}$$


Where:
- $\gamma _{0}$ is the surface tension at $T=0$,
- $T_{c}$ is the critical temperature,
- $N$ is the critical exponent, typically between 1 and 2 , depending on the system.

As $T\rightarrow T_{c} ,\gamma (T)\rightarrow 0$, which reflects that surface tension vanishes at the critical point.


![[Screenshot 2024-10-22 at 17.20.23.png|500]]


### $\operatorname{Can}\frac{d\gamma }{dT}  >0$ ?

Yes, it is possible to have $\frac{d\gamma }{dT}  >0$, but this requires a reversal in the usual entropy relationship: $S_{\text{surface }} < S_{\text{bulk }}$.

In this case, if the bulk has higher entropy than the surface (which is less common but can occur under certain conditions, such as complex interfaces or systems with specific molecular interactions), the relationship between surface tension and temperature would flip. This would mean:

\begin{equation*}
\frac{d\gamma }{dT} =-\frac{S_{\text{surface }} -S_{\text{bulk }}}{A}
\end{equation*}


If $S_{\text{surface }} < S_{\text{bulk, }}$, then $\frac{d\gamma }{dT}  >0$, implying that surface tension increases with temperature.
However, this is not typical for most simple liquids, but it could happen in more complex systems (e.g., specific polymers, liquid crystals, or multi-component systems with unusual phase behaviors).

Summary of Insights:
- For most liquids, $\frac{d\gamma }{dT} < 0$, meaning surface tension decreases with increasing temperature because the surface entropy is greater than the bulk entropy.
- Near the critical point, surface tension goes to zero following a power-law dependence on temperature, characterized by the critical exponent $N$.
- It is possible for $\frac{d\gamma }{dT}  >0$, but this would require the surface entropy to be less than the bulk entropy, a situation that may occur in complex fluids or specialized materials.



Examples:


1. Surfactants at the Interface:

Surfactants and ordered films at interfaces provide examples where the entropy of the surface ( $S_{\text{surface }}$ ) can be less than the entropy of the bulk ( $S_{\text{bulk }}$ ), leading to the unusual situation where the surface tension increases with temperature $\left(\frac{d\gamma }{dT}  >0\right)$.

Surfactants are amphiphilic molecules that reduce surface tension by adsorbing at the interface between two immiscible phases (e.g., water and oil). Surfactants can form ordered monolayers at the interface, especially at low temperatures, where their tails are aligned and packed in an organized manner. This ordered structure means:
- The entropy of the surfactant-covered surface $S_{\text{surface }}$ is lower than that of the bulk $S_{\text{bulk, }}$, especially when compared to the disordered bulk liquid.
- As the temperature increases, the surfactants can undergo phase transitions (e.g., from an ordered monolayer to a more disordered or fluid state). In this case, the increase in temperature disrupts the ordered arrangement, which leads to an increase in surface entropy with temperature.

Thus, in this situation, $S_{\text{surface }} < S_{\text{bulk }}$, and the change in surface tension with temperature can be positive:

$$\begin{equation*}
\frac{d\gamma }{dT}  >0
\end{equation*}$$


This behavior is observed in systems where the interface becomes more disordered as temperature rises, such as surfactant monolayers undergoing phase transitions.

![[Screenshot 2024-10-22 at 17.23.04.png]]


2. Ordered Films or Crystals at the Interface:

When molecules form ordered structures, such as crystals at an interface, the surface becomes highly organized and thus has lower entropy. Examples include:
- Surface crystallization: Certain molecules, like fatty acids, can crystallize at the interface, forming a structured, ordered film. The ordered state of the interface leads to $S_{\text{surface }} < $ $S_{\text{bulk }}$.
- Liquid crystals: These can form structured phases at interfaces, which also have lower entropy than the bulk. Liquid crystal phases, depending on temperature, exhibit various levels of order (e.g., smectic, nematic), and these phases at the interface can exhibit low entropy compared to the bulk phase.

In both cases, as temperature increases:
- The ordered film or crystal becomes less ordered, which can lead to an increase in entropy at the surface.
- Since $S_{\text{surface }}$ is initially less than $S_{\text{bulk }}$, the surface tension can increase with rising temperature until the ordered structure is disrupted.


In Summary:
- Surfactants at interfaces and molecules forming crystals or ordered films at interfaces are prime examples where $S_{\text{surface }} < S_{\text{bulk }}$.
- This results in the unusual behavior where surface tension can increase with temperature ( $\frac{d\gamma }{dT}  >0$ ).
- In such systems, increasing temperature disrupts the ordered structure, leading to an increase in surface entropy and potentially a corresponding increase in surface tension.


What about Energy?


When analyzing surface tension in the context of thermodynamics, different energy functions can be used depending on the conditions and constraints of the system. Each thermodynamic potential (internal energy $U$, Helmholtz free energy $F$, or Gibbs free energy $G$ ) gives a different perspective on surface tension depending on whether temperature, pressure, or entropy is held constant. Here's a breakdown of the different forms and how they relate to surface tension:

1. Internal Energy $U$ :

The internal energy $U$ is the total energy of the system, including kinetic and potential energy of the molecules. Surface tension $\gamma $ can be expressed as the change in internal energy with respect to the surface area $A$, holding entropy $S$, volume $V$, and number of particles $N$ constant:

$$\begin{equation*}
\gamma =\left(\frac{\partial U}{\partial A}\right)_{S,V,N}
\end{equation*}$$


This expression shows that surface tension represents the energy cost per unit area of creating an interface, without changing the entropy of the system. This form is typically useful in adiabatic (constant entropy) processes where the focus is on the total energy of the system, and no heat is exchanged.

2. Helmholtz Free Energy $F$ :

The Helmholtz free energy $F=U-TS$ is a useful thermodynamic potential when the system is at constant temperature $T$ and volume $V$. In this case, surface tension is expressed as:

$$\begin{equation*}
\gamma =\left(\frac{\partial F}{\partial A}\right)_{T,V,N}
\end{equation*}$$


This form is often used for systems in contact with a heat reservoir (constant $T$ ) and allows the surface tension to account for both the internal energy and the entropy of the system. It is commonly used in theoretical descriptions of interfaces in liquids and solids at constant temperature.


3. Gibbs Free Energy $G$ :

The Gibbs free energy $G=H-TS$ (where $H=U+pV$ is the enthalpy) is most commonly used when the system is at constant pressure $p$ and temperature $T$, such as in many practical experiments. Surface tension in this case is given by:

$$\begin{equation*}
\gamma =\left(\frac{\partial G}{\partial A}\right)_{T,p,N}
\end{equation*}$$


The Gibbs free energy is particularly useful for systems involving phase transitions at constant pressure and temperature, such as vapor-liquid interfaces. It is the most common form used in experimental work because it applies to conditions where the pressure and temperature are controlled.

Choosing the Right Form:
- Internal energy $U$ : Use this when you are dealing with isolated systems where entropy is constant (no heat exchange).
- Helmholtz free energy $F$ : This is most appropriate when the system is at constant temperature and volume, like in theoretical modeling of surface phenomena in a closed container.
- Gibbs free energy $G$ : The most commonly used form in practical problems involving surfaces at constant pressure and temperature. This is typical in systems where the interface is exposed to the atmosphere or in open systems involving phase transitions (e.g., boiling, condensation).


Relationship Between Energy and Surface Tension:
- Surface tension $\gamma $ represents the energy cost per unit area to create or expand an interface. Depending on the context, it can be related to the internal energy, Helmholtz free energy, or Gibbs free energy.
- For most real-world applications, particularly those involving fluids, the Gibbs free energy is the most relevant because most experimental systems operate at constant pressure and temperature. However, in closed or theoretical systems (like surface waves in confined systems), the Helmholtz free energy might be more appropriate.

Summary:
- The internal energy form is used when analyzing surface tension in adiabatic or isolated systems.
- The Helmholtz free energy is most useful in systems at constant temperature and volume.
- The Gibbs free energy is the most commonly applied in practical systems at constant pressure and temperature.

Each form of energy relates to surface tension in a slightly different way, depending on the thermodynamic variables that are held constant, and the context of the problem determines which form is most appropriate.



4.2 Example: Coffee Ring Effect


The coffee ring effect refers to the pattern left by a droplet of liquid containing suspended particles after it evaporates. In this case, particles tend to accumulate at the edges of the droplet, forming a ring-like stain. Let's break down the physics behind this phenomenon in more detail.

Droplet Evaporation and Temperature Gradients:
- As the droplet evaporates, the evaporation rate is faster at the edges than at the center. This is due to the larger surface area exposed to air at the perimeter of the droplet. Faster evaporation at the edge leads to evaporative cooling, causing the temperature at the edge to be lower than at the center:

$$\begin{equation*}
T_{\text{edge }} < T_{\text{center }}
\end{equation*}$$


Surface Tension Gradients:
- Surface tension $\gamma $ typically decreases with increasing temperature, as you noted earlier:

$$\begin{equation*}
\frac{\partial \gamma }{\partial T} < 0
\end{equation*}$$


This implies that the surface tension at the edge of the droplet $\gamma _{\text{edge }}$ is higher than the surface tension at the center $\gamma _{\text{center }}$ because the edge is cooler:

$$\begin{equation*}
\gamma _{\text{edge }}  >\gamma _{\text{center }}
\end{equation*}$$


![[Screenshot 2024-10-22 at 17.25.02.png]]


![[Screenshot 2024-10-22 at 17.25.14.png]]


![[Screenshot 2024-10-22 at 17.25.26.png]]



Marangoni Flow:
- A surface tension gradient within the droplet leads to Marangoni flow: liquid moves from regions of higher surface tension to regions of lower surface tension. In this case, liquid flows from the edges (where $\gamma$ is high) toward the center (where $\gamma $ is lower).


$\displaystyle \mathbf{\textcolor[rgb]{0,0.3,1}{Liquid\ Flow\ Direction:}} \ \gamma _{high}\rightarrow \gamma _{low} \ \left( edge\ \rightarrow center\right))$

![[Screenshot 2024-10-22 at 17.26.40.png|500]]



![[Screenshot 2024-10-22 at 17.26.56.png|500]]





Particle Deposition:
- This flow carries suspended particles along with it. If the flow is strong enough, particles are swept toward the center and deposited there.
- However, in many cases, as the liquid moves toward the edges due to the evaporation imbalance, the flow can deposit particles at the edges of the droplet:
- As liquid flows from the center to the edges to compensate for the faster evaporation at the perimeter, particles get trapped and accumulate at the contact line between the droplet and the surface.
- This results in the coffee ring effect, where particles are primarily deposited at the edges.


Competing Effects:
- Marangoni flow driven by surface tension gradients can redistribute the liquid and affect where the particles end up:
- If the flow due to surface tension gradients is weak, particles are more likely to accumulate at the edges, forming the coffee ring pattern.
- If the Marangoni flow is strong, it can create recirculating flows inside the droplet. In this case, particles are carried back toward the center, leading to a more uniform deposition or deposition in the middle of the droplet.


Summary of the Coffee Ring Effect:
1. Evaporation occurs faster at the edge of the droplet, causing evaporative cooling and a lower temperature at the edge.
2. The surface tension at the edge is higher than at the center due to the temperature gradient.
3. Liquid flows from the high surface tension (edge) to the lower surface tension (center), creating a flow pattern.
4. Depending on the strength of the flow, particles can either be deposited at the edges (weak flow) or be recirculated toward the center (strong flow).

# 4.3 Gibbs Dividing Surface


The Gibbs dividing surface is a concept in thermodynamics used to simplify the treatment of interfaces between two phases (e.g., liquid and vapor). This concept allows us to model the interface between two phases without having to account for the complex microscopic variations that occur in a real interfacial region.


1. Defining the Interface in Thermodynamics:

In real systems, the interface between two phases (e.g., a liquid and a gas) is a finite region where the properties (e.g., density, composition, temperature) continuously change from those of one phase to the other. However, modeling this real interfacial region is extremely complicated because it involves tracking changes in properties across a finite thickness.

Gibbs' Approach: Gibbs introduced the concept of a hypothetical dividing surface to simplify the analysis. In this idealized model:
- The interface is considered to have zero thickness.
- The properties of the two phases ( $A$ and $B$ ) are assumed to be homogeneous, and the complex transition region between them is replaced by a sharp boundary-the dividing surface.


 ![[Screenshot 2024-10-22 at 17.27.42.png|500]]

2. Surface Excess Function:

The surface excess concept allows us to compare the real, finite-thickness interfacial region to a hypothetical reference system in which there is a sharp boundary (the Gibbs dividing surface) between phases $A$ and $B$. This approach simplifies the thermodynamic treatment by separating the total system's properties into contributions from the two bulk phases and an additional term that represents the surface.

For a two-component system, we can express the total internal energy $U_{\text{system }}$ as the sum of three components:
- $U_{A}$ : The internal energy of phase A (bulk),
- $U_{B}$ : The internal energy of phase B (bulk),
- $U^{\delta }$ : The surface excess energy, which accounts for the energy associated with the interface.

Thus, the total internal energy of the system can be written as:


$$\begin{equation*}
U_{\text{system }} =U^{\delta } +U_{A} +U_{B}
\end{equation*}$$


Here, $U^{\delta }$ represents the surface excess energy, which captures the energetic contribution of the interface. It quantifies the deviation of the system's total energy from what it would be if phases $A$ and $B$ were separated by a hypothetical sharp boundary with no interface.

Extensive Quantities:

The same principle applies to other extensive properties such as the number of particles $N$ and entropy $S$. We can define the surface excess number of particles $N^{\delta }$ and surface excess entropy $S^{\delta }$ as follows:

$$\begin{gather*}
N^{\delta } =N_{\text{system }} -N_{A} -N_{B}\\
S^{\delta } =S_{\text{system }} -S_{A} -S_{B}
\end{gather*}$$


These equations describe how the actual total number of particles or entropy in the system differs from the sum of what would be present in the two bulk phases, $A$ and $B$, if there were no interface. The excess quantities reflect the contribution from the interface itself.

Interpretation of the Surface Excess Quantities:
- $U^{\delta }$ : Represents the excess internal energy due to the presence of the interface. It captures the energy associated with the interfacial tension or surface tension between the two phases.
- $N^{\delta }$ : Represents the number of particles at the interface, which might differ from the bulk due to adsorption or depletion effects.
- $S^{\delta } :$ Represents the entropy associated with the interface, which could be higher or lower than the bulk due to molecular ordering or disorganization at the interface.


The concept of surface excess allows us to account for the thermodynamic contributions of the interface in a simplified way by defining the hypothetical dividing surface. This method avoids the complexity of dealing with the real, finite-thickness interfacial region, making it easier to calculate quantities like surface tension and interfacial energy.

In summary:
- The Gibbs dividing surface is an idealized model that replaces the complex interfacial region with a sharp boundary of zero thickness.
- The surface excess quantities $U^{\delta } ,N^{\delta }$, and $S^{\delta }$ represent the contributions of the interface to the total energy, number of particles, and entropy, respectively.
- This approach provides a practical framework for analyzing interfaces in terms of thermodynamic properties without having to directly model the detailed molecular structure of the interfacial region.


Assigning the Gibbs Dividing Surface in One- and Two-Component Systems

The Gibbs dividing surface is a conceptual tool in thermodynamics to simplify the description of the interface between two phases by assigning an idealized, sharp boundary between them. Depending on the system's complexity, the dividing surface can be chosen in different ways. Here's how it can be assigned in one-component and two-component systems:

1. One-Component System:


![[Pasted image 20241022172842.png|500]]



In a one-component system (e.g., a liquid in equilibrium with its vapor), the Gibbs dividing surface is typically chosen such that the excess quantity of a property (such as mass, volume, or enthalpy) at the interface vanishes. One common choice is to make the excess enthalpy zero:

$$\begin{equation*}
h^{S} =h_{\text{system }} -h_{A} -h_{B} =0
\end{equation*}$$


This means that the Gibbs dividing surface is placed so that the difference between the total system's enthalpy $h_{\text{system }}$ and the sum of the enthalpies of the two bulk phases $h_{A}$ and $h_{B}$ is zero. In other words, the dividing surface is chosen such that there is no excess enthalpy at the interface.
- This approach simplifies calculations by making the surface excess enthalpy vanish.
- The dividing surface can be placed arbitrarily, but this particular choice ensures that one extensive property (such as enthalpy or volume) does not have an excess contribution from the interface.

This condition can be generalized to other extensive properties, like the number of particles or internal energy. The goal is to minimize or nullify the "surface excess" for a given property.




2. Two-Component System


![[Pasted image 20241022172926.png|500]]




In a two-component system (e.g., a mixture of water and ethanol), assigning the Gibbs dividing surface becomes more nuanced because two components can each have their own excess or deficiency at the interface. The choice of how to define the dividing surface depends on the problem you're studying and which component you want to simplify the analysis for.

Using the Solvent to Define the Dividing Surface:
- Water-Ethanol Example: In a water-ethanol mixture, you can choose to define the Gibbs dividing surface based on the solvent, which is typically the more abundant component (in this case, water). This means that the surface excess of the solvent (water) is set to zero at the interface:

$$\begin{equation*}
h_{\text{water }}^{S} =h_{\text{system }} -h_{\text{water }} -h_{\text{ethanol }} =0
\end{equation*}$$


In this case, the Gibbs dividing surface is placed such that there is no excess or deficiency of water at the interface. However, there could still be an excess or deficiency of ethanol at the interface, which would be described by:

$$\begin{equation*}
h_{\text{ethanol }}^{S} =h_{\text{system }} -h_{\text{ethanol }} -h_{\text{water }}
\end{equation*}$$


By defining the dividing surface in this way, the analysis of interfacial properties becomes easier because you're effectively ignoring the water's contribution to the interfacial excess quantities.


Why Use the Solvent?
- In practice, the component that is present in the larger amount (solvent) is often used to define the Gibbs dividing surface. This simplifies the calculations because the surface excess of the solvent can be ignored, and attention can be focused on the surface excesses of the other components (e.g., solutes like ethanol).
- If we define the interface in terms of the solvent, the surface excess of the solvent is zero by construction. This allows us to focus on the interfacial behavior of the solute (ethanol) and the properties of the interface itself (e.g., surface tension).

Summary of Assigning the Gibbs Dividing Surface:
- One-Component System: The Gibbs dividing surface is chosen to nullify the surface excess of a property like enthalpy or volume. The surface is typically placed so that the excess enthalpy is zero, simplifying the treatment of the interface.
- Two-Component System: In a system like water-ethanol, the Gibbs dividing surface is usually defined using the solvent (water), making the surface excess of the solvent zero. The focus then shifts to the surface excess of the solute (ethanol) at the interface, which allows for easier calculation of interfacial properties.

By using the Gibbs dividing surface, we can ignore some of the complexity of the interface and focus on the key interfacial phenomena or behaviors, such as surface tension, adsorption, and excess quantities of solutes.



# 4.4 Gibbs Adsorption Equation


The Gibbs adsorption equation relates changes in surface tension $\gamma $ to changes in temperature, chemical potential, and surface excess. It's particularly useful for understanding how surface tension changes when solutes (or other components) adsorb at the interface of a system. Let's break down the concepts and equations you've provided.

Gibbs Adsorption Equation:
The general form of the Gibbs adsorption equation is:

$$\begin{equation*}
d\gamma =-\frac{S^{S}}{A} dT+\sum _{i}\frac{h_{i}^{S}}{A} dN_{i}
\end{equation*}$$

- $d\gamma $ : The change in surface tension.
- $S^{S}$ : The surface entropy (surface excess entropy).
- $A$ : The surface area.
- $h_{i}^{S}$ : The surface excess of component $i$.
- $dT$ : The change in temperature.
- $dN_{i}$ : The change in the number of moles of component $i$.

The first term $-\frac{S^{S}}{A} dT$ accounts for the effect of temperature changes on surface tension, while the second term $\sum _{i}\frac{h_{i}^{S}}{A} dN_{i}$ describes how surface tension changes due to the adsorption of different components at the interface.


Surface Excess:
- Entropy Contribution:

$$\begin{equation*}
-\frac{S^{S}}{A} dT
\end{equation*}$$


This term represents the change in surface tension due to the surface entropy. It shows how temperature changes can affect surface tension. However, if temperature is held constant, this term becomes zero.
- Surface Excess $\Gamma $ : The surface excess $\Gamma _{i}$ of a component $i$ is defined as:

$$\begin{equation*}
\Gamma _{i} =\frac{h_{i}^{S}}{A}
\end{equation*}$$


This is the amount of component $i$ adsorbed at the interface, normalized by the surface area
$A$. It represents how much of the component is present at the interface compared to the bulk.
Simplifying to Two Components at Constant Temperature:
For a two-component system at constant temperature $T$, the equation simplifies because $dT=0$. This removes the first term:

$$\begin{equation*}
d\gamma =-( \Gamma _{1} dN_{1} +\Gamma _{2} dN_{2})
\end{equation*}$$

- Here, $\Gamma _{1}$ and $\Gamma _{2}$ are the surface excesses of components 1 and 2, respectively.
- $dN_{1}$ and $dN_{2}$ represent changes in the number of moles of each component at the interface.

Choosing $\Gamma _{1} =0$ :
In practice, we can often simplify the equation by assuming that one of the components (typically the solvent, or the more abundant component) has no surface excess. In your example:

$$\begin{equation*}
h_{1}^{S} =0\ \ \Rightarrow \ \ \Gamma _{1} =0
\end{equation*}$$


This implies that component 1 does not adsorb at the interface. As a result, the equation simplifies further to:

$$\begin{equation*}
d\gamma =-\Gamma _{2} dN_{2}
\end{equation*}$$


This means that changes in surface tension are driven solely by the adsorption of component 2 at the interface.

What is $dN_{2}$ ?
$dN_{2}$ represents the change in the number of moles of component 2 at the interface. In terms of the chemical potential $\mu _{2}$, we can express $dN_{2}$ in terms of activity $a_{2}$ or concentration $C_{2}$ using the ideal solution approximation. For ideal solutions:

$$\begin{equation*}
N_{2} =RT\ln( a_{2})
\end{equation*}$$

where:
- $a_{2}$ is the activity of component 2 , which measures its effective concentration in the system.
- For dilute solutions, activity $a_{2}$ can be approximated by the concentration $C_{2}$, leading to:

$$\begin{equation*}
N_{2} \approx RT\ln( C_{2})
\end{equation*}$$


Gibbs Adsorption Equation in Terms of Concentration:
Now, using this relation for $N_{2}$, we can rewrite the surface excess $\Gamma _{2}$ in terms of the concentration $C_{2}$ :

$$\begin{equation*}
\Gamma _{2} =-\left. \frac{1}{RT}\frac{\partial \gamma }{\partial \ln C_{2}}\right| _{T}
\end{equation*}$$


This expression shows how surface tension $\gamma $ depends on the concentration $C_{2}$ of component 2 at the interface. By differentiating $\gamma $ with respect to $\ln C_{2}$, we get the surface excess of component 2 .

Alternatively, using the chain rule, we can write this in terms of the direct derivative with respect to concentration:

$$\begin{equation*}
\Gamma _{2} =-\left. \frac{C_{2}}{RT}\frac{\partial \gamma }{\partial C_{2}}\right| _{T}
\end{equation*}$$


This form tells us how surface tension changes with concentration and how the surface excess $\Gamma _{2}$ is related to the concentration gradient at constant temperature.

Key Insights:
- The Gibbs adsorption equation relates the change in surface tension to the temperature and the surface excess of components at the interface.
- When temperature is constant, the change in surface tension is driven by the surface excess $\Gamma $, which is related to the concentration of components at the interface.
- The equation provides a way to quantify how adsorption of solutes at the interface affects the surface tension of the system, which is critical in systems like surfactants, colloids, or mixtures.

# 4.5 Examples

Example 1: Ethanol and Water System


Let's dive into the example of ethanol and water in the context of the Gibbs adsorption equation and how surface excess $\Gamma $ can be extracted from experimental data.

For a system consisting of ethanol (EtOH) and water:
- $h_{\mathrm{H}_{2} O} =0$, meaning that we are choosing water as the reference for the Gibbs dividing surface. This implies that the surface excess of water at the interface is zero:

$$\begin{equation*}
\Gamma _{\text{water }} =0
\end{equation*}$$

- $h_{\text{etOH }}  >0$, meaning that ethanol has a positive surface excess, indicating that ethanol molecules are preferentially adsorbed at the interface. This happens because ethanol is more surface-active compared to water, especially in aqueous solutions.

Thus, the surface excess of ethanol at the interface $\Gamma _{2}$ is positive:

$$\begin{equation*}
\Gamma _{2}  >0
\end{equation*}$$


This means that ethanol tends to accumulate at the interface, reducing the surface tension $\gamma $ of the water-ethanol mixture.

Example 2: Opposite Case; Ions in Water
For ions dissolved in water (e.g., salts), the situation is often reversed. The surface excess of ions is typically negative because ions tend to be excluded from the interface, resulting in a negative $\Gamma _{2}$ :

$$\begin{equation*}
\Gamma _{2} < 0
\end{equation*}$$


In this case, the derivative of surface tension with respect to concentration is positive:

$$\begin{equation*}
\left(\frac{\partial \gamma }{\partial C}\right)_{T}  >0
\end{equation*}$$


This means that as the concentration of ions increases, the surface tension increases. Ions in water tend to make the surface more "rigid" and less likely to lower the surface tension compared to ethanol, which prefers the interface and reduces the tension.

Extracting Surface Excess from Slope:
The Gibbs adsorption equation allows us to extract the surface excess $\Gamma _{2}$ from the slope of the curve of surface tension versus concentration. The equation:

$$\begin{equation*}
\Gamma _{2} =-\frac{C_{2}}{RT}\left(\frac{\partial \gamma }{\partial C_{2}}\right)_{T}
\end{equation*}$$

shows that by measuring the surface tension $\gamma $ as a function of the concentration of ethanol $C_{2}$ (or any solute), and knowing the temperature $T$, we can calculate the surface excess $\Gamma _{2}$. The sign of $\frac{\partial \gamma }{\partial C_{2}}$ tells us whether the solute is adsorbing ( $\Gamma _{2}  >0$ ) or being excluded from the interface ( $\Gamma _{2} < 0$ ).




![[Screenshot 2024-10-22 at 17.31.54.png|500]]



Gibbs Adsorption Equation (General Form):
The general form of the Gibbs adsorption equation is:

$$\begin{equation*}
d\gamma =-\left(\frac{S}{A} dT+\sum _{i} \Gamma _{i} dN_{i}\right)
\end{equation*}$$


Where:
- $\frac{S}{A} dT$ : Describes how surface tension changes with temperature. In the case of constant temperature ( $dT=0$ ), this term drops out.
- $\sum _{i} \Gamma _{i} dN_{i}$ : Describes how surface tension changes with the adsorption of different components at the interface. The surface excess $\Gamma _{i}$ quantifies the amount of each component $i$ adsorbed at the interface.

Summary of Key Insights:
1. Ethanol in water: Ethanol has a positive surface excess at the interface, meaning it adsorbs at the interface and reduces surface tension. The slope of the surface tension versus concentration curve is negative $\left(\frac{\partial \gamma }{\partial C_{2}}\right)_{T} < 0$.
2. Ions in water: lons typically have a negative surface excess, meaning they are excluded from the interface. As a result, the slope of the surface tension versus concentration curve is positive $\left(\frac{\partial \gamma }{\partial C}\right)_{T}  >0$.
3. Extracting surface excess: By measuring the surface tension as a function of concentration and using the Gibbs adsorption equation, we can calculate the surface excess of a component, which provides insight into how that component interacts with the interface.

This analysis is crucial for understanding systems involving surfactants, electrolytes, and other surface-active agents in mixtures.


Gibbs Dividing Surface

need to describe interface for thermodynamics
(phase $\displaystyle \alpha$ : phase $\displaystyle \beta$); hypothetical planar surface



![[Pasted image 20241022173254.png|500]]


$$\begin{aligned}
 & U^{s} =U_{\text{system }} -U_{\alpha } -U_{\beta }\\
 & h^{s} =h_{\text{system }} -h_{\alpha } -h_{\beta }\\
 & S^{s} =S_{\text{system }} -S_{\alpha } -S_{\beta }
\end{aligned}$$

$h^{s} =0=h_{\text{system }} -h_{\alpha } -h_{\beta } =0$
freedom to put interface where most convenient → common choice ($\displaystyle h_{solvent} =0)$.
Why?  $d\gamma =-\left(\frac{S^{s}}{A} dT+\sum _{i} d_{N_{i}}\frac{h_{i}^{s}}{A}\right)$
$\frac{S^{s}}{A} dT$ Tells us how $\displaystyle \gamma$ changes with T
$\Gamma _{i} =\frac{h_{i}^{s}}{A}$ Tells us how $\displaystyle \gamma $ changes with concentration


Examples:

$d_{N_{i}} =0\ \ ($ or $\left. \ \ n_{i}^{S} =0\right)\rightarrow \ \ d_{\gamma } =-\frac{S^{S}}{A} dT$

$$ \begin{array}{l}
\frac{d\gamma }{dT} =-\frac{S^{S}}{A}\\
\\
Slope\ \equiv \ \frac{d\gamma }{dT}
\end{array}$$


![[Pasted image 20241022173355.png|500]]



const $T\rightarrow d\gamma =-\sum\limits _{i} \Gamma _{i} dN_{i}$

2 Components set one of the components $\displaystyle n_{A}^{S} =0$
$\displaystyle d\gamma \ =-\Gamma _{2} dN_{2} \ \rightarrow \Gamma _{2} =-\frac{\partial \gamma }{\partial N_{2}}$
$\displaystyle N_{2} \sim ln( C)$



Case 1:


$$\begin{aligned}
 & -\frac{\partial \gamma }{\partial \ln (c)}\\
 & \rightarrow \Gamma _{2}  >0
\end{aligned}$$

Slope → Surface Excess


![[Screenshot 2024-10-22 at 17.34.45.png|500]]


Molecules go to interface


![[Screenshot 2024-10-22 at 17.35.13.png|500]]


Case 2:


$$\begin{aligned}
 & \rightarrow \Gamma _{2} < 0
\end{aligned}$$



![[Screenshot 2024-10-22 at 17.35.42.png|500]]


System (phase $\displaystyle \alpha $ : phase $\displaystyle \beta $)
P = const
no chemical reactions: $\displaystyle n_{total} =const$
S no volume
Gibbs dividing interface assumptions


Free Energy:

entire system:

$$\begin{equation*}
F=-pV+\gamma ^{A} +\sum _{i} N_{i} n_{i}
\end{equation*}$$

single phases:

$$\begin{equation*}
F^{\alpha } =-pV^{\alpha } +\sum _{i} N_{i} n_{i}^{\alpha }
\end{equation*}$$


Interface:

$$ \begin{array}{l}
F^{s} =F-\left( F^{\alpha } +F^{\beta }\right)\\
=-pV+p\left( V^{\alpha } +V^{\beta }\right) +\gamma A-\sum _{i} N_{i}\left( h_{i}^{\alpha } +n_{i}^{\beta } -n_{i}\right)\\
\\
\boxed{ \begin{array}{{>{\displaystyle}l}}
V\ =\ V^{^{\alpha }} +V^{\beta }\\
h_{i}^{s} =h_{i}^{\alpha } +h_{i}^{\beta } -h_{i} \Longrightarrow h_{i} =h_{i}^{s} +h_{i}^{\alpha } +h_{i}^{\beta }
\end{array}}\\
\\
=\gamma A\pm \sum _{i} N_{i} n_{i}^{s}
\end{array}$$


We now from thermodynamics:



$$\begin{equation*}
\begin{aligned}
 & dF=-SdT-pdV+\gamma dA+\sum _{i} N_{i} dn_{i}\\
 & dF^{\alpha } =-S^{\alpha } dT-pdV^{\alpha } +\sum _{i} N_{i} dn_{i}^{\alpha }
\end{aligned}
\end{equation*}$$

subtract pure phases from $dF$


$dF^{S} =dF-\left( dF^{\alpha } +dF^{\beta }\right)$

$$\begin{aligned}
 & =dF-\left( dF^{\alpha } +dF^{\beta }\right)\\
 & =-S^{S} dT+\gamma dA+\sum N_{i} dn_{i}^{s}
\end{aligned}$$

Or $\displaystyle dF^{s}$ from equation above:


$$ \begin{array}{l}
dF^{s} =d\gamma A+dA\gamma +\sum\limits _{i} N_{i} dn_{i}^{s} +\sum\limits _{i} d\mu _{i} n_{i}^{s}\\
dF^{S} -dF^{S} \equiv 0\\
\\
-S^{s} dT+\gamma dA+\sum\limits _{i} N_{i} dn_{i}^{s} -d\gamma A-dA_{\gamma } -\sum\limits _{i} dN_{i} n_{i}^{s} -\sum\limits _{i} dN_{i} n_{i}^{s} =0\\
\rightarrow -S^{s} dT-d\gamma A -\sum\limits _{i} dN_{i} h_{i}^{s} =0\ ( Gibbs-Duhem\ Equation)\\
\\
\frac{S^{s}}{A} di+d\gamma +\sum _{i} N_{i}\frac{n_{i}^{s}}{A} =0\\
\\
d\gamma =-\left(\frac{S^{S}}{A} dT+\sum\limits _{i} N_{i}\frac{h_{i}^{S}}{A}\right) \ ( Gibbs\ Equation)\\
\end{array}$$



