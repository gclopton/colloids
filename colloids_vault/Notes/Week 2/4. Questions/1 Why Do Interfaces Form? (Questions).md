---
chapter_title: Why Do Interfaces Form?
chapter_number: 1
---

# 1 Why Do Interfaces Form?


##### [mc] According to thermodynamics, why do interfaces form between different phases?
- [ ] Because systems aim to maximize their entropy.
- [x] Because systems tend to minimize their free energy.
- [ ] Because systems strive to achieve thermal equilibrium.
- [ ] Because systems prefer to increase their surface area.
[--end]


##### [mc] What does the interface between two phases, such as liquid and vapor, represent?
- [ ] A region where properties are uniform and identical to both phases.
- [ ] A boundary that completely isolates one phase from the other.
- [x] A region where properties change from those characteristic of one phase to those of the other.
- [ ] A point where one phase instantaneously transforms into another.
[--end]


##### [mc] The stability of an interface arises due to a compromise between two competing effects. What are these two effects?
- [ ] Maximization of entropy and minimization of temperature.
- [x] Minimization of bulk free energy and the cost of interface formation (surface energy).
- [ ] Maximization of bulk free energy and the cost of interface formation (surface energy).
- [ ] Maximization of pressure and minimization of volume.
- [ ] Minimization of energy and maximization of disorder.
[--end]

##### [mc] How does a non-homogeneous system tend to minimize its bulk free energy?
- [ ] By increasing its temperature uniformly.
- [x] By separating into distinct phases.
- [ ] By maximizing molecular interactions between different substances.
- [ ] By expanding to occupy a larger volume.
[--end]


##### [mc] In a mixture of oil and water, how does the system reduce its overall energy?
- [ ] By forming a homogeneous mixture where oil and water molecules overlap extensively.
- [ ] By increasing the temperature to dissolve oil in water.
- [x] By minimizing the overlap between oil and water molecules, leading to phase separation.
- [ ] By adding surfactants to stabilize the mixture.
[--end]

##### [mc] Why does creating an interface cost energy?
- [ ] Because molecules at the interface have more neighboring molecules, leading to lower energy states.
- [x] Because molecules at the interface have fewer neighboring molecules, leading to higher energy states.
- [ ] Because interfaces increase the overall entropy of the system.
- [ ] Because molecules at the interface are in a lower energy state due to complete bonding.
[--end]

##### [mc] What is surface energy a measure of?
- [ ] The kinetic energy of surface molecules.
- [x] The energetic cost of having an interface.
- [ ] The thermal energy required to break surface bonds.
- [ ] The potential energy stored within the bulk material.
[--end]

##### [mc] Why is surface energy typically greater than the bulk energy?
- [ ] Because molecules at the surface are more fully bonded than those in the bulk.
- [ ] Because surface molecules have more neighboring molecules.
- [x] Because molecules at the surface are not as fully bonded as those in the bulk.
- [ ] Because surface molecules are at a lower energy state due to complete bonding.
[--end]

##### [mc] The stability of an interface is determined by:
- [ ] The temperature and pressure of the environment.
- [x] The balance between the reduction in bulk free energy and the increase in surface energy.
- [ ] The mass and volume of the phases involved.
- [ ] The rate at which molecules diffuse across the interface.
[--end]

##### [mc] Considering bulk energy and surface energy, under what condition is an interface stable?
- [ ] If the gain in bulk free energy from phase separation is less than the cost of creating an interface ($ΔE_b < E_s$).
- [ ] If the gain in bulk free energy from phase separation equals the cost of creating an interface ($ΔE_b = E_s$).
- [x] If the gain in bulk free energy from phase separation is greater than the cost of creating an interface ($ΔE_b > E_s$).
- [ ] If there is no change in bulk free energy or surface energy.
[--end]

##### [mc] If the cost of creating an interface is higher than the gain in bulk free energy, what is the system likely to do?
- [ ] Increase the interfacial area to maximize energy.
- [ ] Remain unchanged due to energy equilibrium.
- [x] Try to minimize the interfacial area, leading to phenomena like droplet coalescence.
- [ ] Absorb energy to create more interfaces.
[--end]


## 1.1 Free Energy


##### [sa] A chemical reaction occurs at a constant pressure of 1 atm and a temperature of 298 K . The enthalpy change $\Delta H$ for the reaction is -85 kJ , and the entropy change $\Delta S$ for the system is $-120 \mathrm{~J} / \mathrm{K}$.
1. Calculate the free energy change for this reaction.
2. Determine if the reaction is spontaneous under these conditions.
[answ]
~~~Python
import pint

ureg = pint.UnitRegistry()

def calculate_gibbs_free_energy(delta_H, temperature, delta_S):
    delta_H = delta_H.to(ureg.joule)
    delta_G = delta_H - (temperature * delta_S)
    spontaneous = delta_G.magnitude < 0
    return delta_G, spontaneous

delta_H = -85 * ureg.kilojoule
temperature = 298 * ureg.kelvin
delta_S = -120 * ureg.joule / ureg.kelvin

delta_G, spontaneous = calculate_gibbs_free_energy(delta_H, temperature, delta_S)

print(f"Gibbs free energy change (ΔG): {delta_G:.2f}")
print("The reaction is spontaneous." if spontaneous else "The reaction is not spontaneous.")
~~~
[--answ]
[--end]

##### [sa] A gas is confined in a container at constant volume and a temperature of $37^{\circ} \mathrm{C}$ . The internal energy change $\Delta U$ for the process is -45 kJ , and the entropy change $\Delta S$ for the system is $-85 \mathrm{~J} / \mathrm{K}$
1. Calculate the free energy change for this process.
2. Determine if this process results in a decrease in the system's free energy at constant volume and temperature.
[answ]
~~~Python
import pint

ureg = pint.UnitRegistry()

def helmholtz_free_energy(delta_U, temperature, delta_S):
    delta_U = delta_U.to(ureg.joule)
    delta_F = delta_U - (temperature * delta_S)
    favorable = delta_F.magnitude < 0
    return delta_F, favorable

delta_U = -45 * ureg.kilojoule
temperature = ureg.Quantity(37, ureg.degC).to(ureg.kelvin)
delta_S = -85 * ureg.joule / ureg.kelvin

delta_F, favorable = helmholtz_free_energy(delta_U, temperature, delta_S)
print(f"Free energy change (ΔF): {delta_F:.2f}")
print(
    "The process decreases the system's free energy."
    if favorable
    else "The process does not decrease the system's free energy."
)
~~~
[--answ]
[--end]


[qgroup]

```Python
import pint

ureg = pint.UnitRegistry()

def helmholtz_free_energy(delta_U, temperature, delta_S):
    delta_U = delta_U.to(ureg.joule)
    delta_F = delta_U - (temperature * delta_S)
    favorable = delta_F.magnitude < 0
    return delta_F, favorable

delta_U = -45 * ureg.kilojoule
temperature = (37 * ureg.degC).to(ureg.kelvin)  # Convert Celsius to Kelvin
delta_S = -85 * ureg.joule / ureg.kelvin

delta_F, favorable = helmholtz_free_energy(delta_U, temperature, delta_S)
print(f"Free energy change (ΔF): {delta_F:.2f}")
print(
    "The process decreases the system's free energy."
    if favorable
    else "The process does not decrease the system's free energy."
)
```


##### [mc] What error will occur when running the code?
- [ ] A `SyntaxError` due to incorrect function definition.
- [ ] A `TypeError` because of incompatible types in subtraction.
- [x] An `OffsetUnitCalculusError` due to operations with an offset unit.
- [ ] A `ZeroDivisionError` because of division by zero.
[--end]


##### [mc] What is the purpose of the line `ureg = pint.UnitRegistry()` in the code?
- [ ] To initialize a dictionary for storing units.
- [x] To create a unit registry, allowing the use of physical units in calculations.
- [ ] To define a function for unit conversions.
- [ ] To convert all temperature values to Kelvin.
[--end]


##### [mc] Why does the `OffsetUnitCalculusError` occur in the code?
- [ ] Because degrees Celsius cannot be converted to Kelvin.
- [x] Because you cannot multiply or divide quantities with offset units directly.
- [ ] Because the Pint library does not support temperature units.
- [ ] Because the temperature value is negative.
[--end]



##### [mc] How can you fix the error caused by the line `temperature = (37 * ureg.degC).to(ureg.kelvin)`?
- [ ] Remove the conversion to Kelvin and use degrees Celsius directly.
- [x] Use `ureg.Quantity(37, ureg.degC).to(ureg.kelvin)` to properly define the temperature.
- [ ] Change `ureg.degC` to `ureg.degK` in the code.
- [ ] Convert the temperature to Fahrenheit first.
[--end]

##### [mc] Why is it necessary to convert `delta_U` to joules in the function?
- [ ] Because kilojoules cannot be used in calculations.
- [ ] To match the units of temperature in degrees Celsius.
- [ ] To ensure all calculations are in SI units for consistency.
- [x] To ensure that `delta_U`, `temperature`, and `delta_S` have compatible units for arithmetic operations.
[--end]


[--qgroup]

##### [mc] Which of the following conditions must be met for Gibbs free energy to determine if a process is spontaneous?
- [ ] Constant volume and constant temperature
- [ ] Constant volume and constant pressure
- [x] Constant pressure and constant temperature
- [ ] Constant internal energy and constant entropy
[--end]

##### [mc] In a system where only volume and temperature are held constant, which free energy should be used to analyze whether a process is favorable?
- [ ] Gibbs free energy $G$
- [x] Helmholtz free energy $F$
- [ ] Enthalpy $H$
- [ ] Entropy $S$
[--end]

##### [mc] The Gibbs free energy $G$ of a reaction is found to be negative under constant temperature and pressure. This implies that:
- [x] The reaction is spontaneous under these conditions.
- [ ] The reaction is non-spontaneous under these conditions.
- [ ] The reaction will proceed only at constant volume.
- [ ] The entropy of the system decreases.
[--end]

##### [mc] Which of the following statements is true?
- [ ] A negative change in Helmholtz free energy at constant pressure and temperature indicates a spontaneous process.
- [ ] A negative change in Gibbs free energy at constant volume and temperature indicates a spontaneous process.
- [x] A negative change in Helmholtz free energy at constant volume and temperature indicates a favorable process.
- [ ] A negative change in Gibbs free energy at constant volume and entropy indicates a favorable process.
[--end]


##### [mc] What physical quantities does Helmholtz free energy primarily relate to?
- [x] Internal energy, temperature, and entropy
- [ ] Enthalpy, temperature, and entropy
- [ ] Pressure, temperature, and enthalpy
- [ ] Internal energy, volume, and entropy
- [ ] Volume, temperature, and pressure
[--end]




## 1.2 Bulk Free Energy

##### [mc] What does bulk free energy primarily refer to in a material or system?
- [ ] The free energy at the surface of the material
- [ ] The free energy associated with the entire material, including surfaces and interfaces
- [x] The free energy associated with the interior of the material, excluding surface and interface contributions
- [ ] The energy required to form an interface in the material
[--end]

##### [mc] Why is bulk free energy generally lower than free energy at the surface or interface?
- [ ] Surface molecules have more stable configurations than bulk molecules
- [x] Atoms in the bulk are fully surrounded, leading to lower-energy, stable configurations
- [ ] Bulk atoms require more energy to maintain stability
- [ ] Bulk free energy includes contributions from surface tension
[--end]

##### [mc] In a system undergoing a phase transition, what is often a primary driving force?
- [ ] Minimizing surface free energy
- [ ] Maximizing surface area
- [x] Minimizing bulk free energy
- [ ] Increasing the energy at the interface
[--end]

##### [mc] Which of the following best describes why surface free energy is typically higher than bulk free energy?
- [x] Surface molecules have fewer neighboring molecules, leading to higher energy states
- [ ] The surface of a material is less reactive than the bulk
- [ ] Bulk atoms are less stable due to close proximity to the surface
- [ ] Surface and bulk molecules have identical configurations
[--end]

##### [mc] In the context of a chemical reaction, why is minimizing bulk free energy often beneficial?
- [ ] It reduces the stability of the reaction products
- [x] It promotes a stable, low-energy state for the system
- [ ] It increases the free energy in the surface region
- [ ] It only applies to reactions at constant temperature
[--end]

##### [mc] Bulk free energy includes contributions from both the interior and surface regions of a material.
- [ ] True
- [x] False
[--end]

##### [mc] The primary driving force in phase transitions is often the reduction of surface free energy rather than bulk free energy.
- [ ] True
- [x] False
[--end]

##### [mc] Atoms in the bulk of a material generally have a lower free energy than atoms at the surface.
- [x] True
- [ ] False
[--end]

##### [mc] In a chemical reaction, achieving a low bulk free energy generally leads to a more stable product.
- [x] True
- [ ] False
[--end]

##### [mc] Atoms at the surface have lower energy configurations than atoms in the bulk.
- [ ] True
- [x] False
[--end]



## 1.3 Surface Energy

##### [mc] What is surface energy in the context of materials?
- [ ] The total energy of a material, including its bulk and surface
- [x] The energy required to create a unit area of surface in a material
- [ ] The energy difference between a gas and its condensed phase
- [ ] The thermal energy of atoms within the bulk of the material
[--end]

##### [mc] Why do atoms or molecules at the surface of a material have higher energy than those in the bulk?
- [x] They have fewer neighboring atoms to bond with, resulting in unbalanced forces
- [ ] Surface atoms are more stable than bulk atoms
- [ ] They are fully surrounded, resulting in lower stability
- [ ] They gain extra energy due to increased bonding interactions
[--end]

##### [mc] Surface energy is typically measured in which of the following units?
- [ ] Joules per cubic meter $\left(\mathrm{J} / \mathrm{m}^3\right)$
- [ ] Newtons per meter ($\mathrm{N} / \mathrm{m}$)
- [x] Joules per square meter $\left(\mathrm{J} / \mathrm{m}^2\right)$
- [ ] Kilograms per square meter $\left(\mathrm{kg} / \mathrm{m}^2\right)$
[--end]

##### [mc] In which of the following phenomena does surface energy play a significant role?
- [ ] Evaporation and condensation
- [x] Wetting, adhesion, and interface stability
- [ ] Elastic deformation
- [ ] Thermal conduction
[--end]

##### [mc] Why do systems tend to minimize their surface energy?
- [ ] To increase their surface area
- [x] To reach a more stable, lower-energy configuration
- [ ] To achieve a higher-energy, unstable state
- [ ] To maximize unbalanced forces at the surface
[--end]

##### [mc] Surface energy is the excess energy that arises because surface atoms are not as fully bonded as those in the bulk.
- [x] True
- [ ] False
[--end]

##### [mc] Surface energy is quantified as energy per unit volume, commonly measured in joules per cubic meter $\left(\mathrm{J} / \mathrm{m}^3\right)$.
- [ ] True
- [x] False
[--end]

##### [mc] High surface energy in a system tends to encourage the formation of compact shapes to reduce surface area.
- [x] True
- [ ] False
[--end]

##### [mc] In phenomena like droplet coalescence, the system minimizes its surface energy by reducing the total surface area.
- [x] True
- [ ] False
[--end]

##### [mc] Surface energy has no influence on adhesion between two materials.
- [ ] True
- [x] False
[--end]



## 1.4 Droplet Coalescence and Surface Area Considerations


##### [mc] What is droplet coalescence?
- [ ] The process of a droplet evaporating into the air
- [ ] The formation of small droplets from a larger droplet
- [x] The merging of two or more small droplets to form a larger droplet
- [ ] The division of a droplet into smaller parts
[--end]

##### [mc] What primarily drives the process of droplet coalescence?
- [ ] The system's tendency to maximize entropy
- [x] The system's tendency to minimize free energy, especially surface energy
- [ ] The increase in temperature and pressure within the droplets
- [ ] The reduction in the volume of the combined droplets
[--end]

##### [mc] Why does combining small droplets reduce the total energy of the system?
- [ ] It increases the total volume of the droplets, lowering energy
- [ ] It increases the number of molecules in the droplet, stabilizing the system
- [x] It decreases the total surface area, thus reducing surface energy
- [ ] It decreases the surface tension of each droplet individually
[--end]

##### [mc] Why is the minimization of surface area through coalescence energetically favorable?
- [ ] Smaller surface area reduces the system's entropy
- [x] Surface energy is directly related to surface area, so reducing surface area lowers free energy
- [ ] Surface area minimization increases the energy stored in the system
- [ ] Minimizing surface area increases the free energy of the system
[--end]

##### [mc] What happens to the surface energy of a system when small droplets coalesce into a larger droplet?
- [ ] The surface energy increases as more molecules come into contact
- [x] The surface energy decreases due to a reduction in total surface area
- [ ] The surface energy remains the same since volume is conserved
- [ ] Surface energy increases because of increased molecular interaction
[--end]

##### [mc] What is surface tension?
- [ ] The force that pulls a liquid to fill the shape of its container
- [ ] The force per unit volume acting within the bulk of a liquid
- [x] The force per unit length acting at the interface between a liquid and another phase
- [ ] The energy required to break bonds within the bulk of a liquid
[--end]

##### [mc] Why do spherical droplets form as a result of surface tension?
- [ ] Spherical shapes maximize the surface area of the liquid for a given volume
- [x] Spherical shapes minimize the surface area of the liquid for a given volume
- [ ] Spherical shapes are energetically unstable, causing rapid coalescence
- [ ] Spherical shapes have no effect on surface tension-related energy
[--end]

##### [mc] During droplet coalescence, why is the reduction in surface area favorable for the system?
- [ ] It decreases the overall volume of the liquid droplets
- [x] It decreases the surface tension-related energy, stabilizing the system
- [ ] It increases the surface area, enhancing intermolecular forces
- [ ] It maximizes surface energy, promoting coalescence
[--end]

##### [mc] How does surface tension contribute to the process of droplet coalescence?
- [ ] By increasing the molecular forces within the bulk
- [x] By promoting the formation of compact shapes to reduce surface area
- [ ] By decreasing the cohesive forces between liquid molecules
- [ ] By encouraging the formation of larger droplets with higher surface energy
[--end]

##### [mc] What is the primary reason that the coalescence of small droplets into a larger spherical droplet reduces the energy of the system?
- [ ] Coalescence increases the surface area and surface tension-related energy
- [x] Coalescence reduces the total surface area, lowering surface tension-related energy
- [ ] Coalescence increases the entropy of the system
- [ ] Coalescence maintains constant surface area but redistributes energy evenly
[--end]

##### [mc] Surface energy is directly proportional to the surface area of a droplet, provided that the volume is fixed.
- [x] True
- [ ] False
[--end]


##### [mc] Why do small droplets combine to form larger droplets?
- [ ] Because larger droplets have a higher surface energy
- [ ] To maximize the system's surface area
- [x] To minimize the system's surface energy
- [ ] Because smaller droplets have lower surface energy per unit volume
[--end]

##### [mc] For a fixed volume, the surface energy of a droplet is directly proportional to its:
- [ ] Volume
- [ ] Mass
- [x] Surface area
- [ ] Density
[--end]

##### [mc] Compared to smaller droplets, larger droplets have:
- [ ] A greater surface area relative to their volume
- [x] A smaller surface area relative to their volume
- [ ] The same surface area relative to their volume
- [ ] No surface area
[--end]

##### [mc] What happens to the surface energy per unit volume as droplets combine to form larger droplets?
- [ ] It increases
- [x] It decreases
- [ ] It remains the same
- [ ] It fluctuates randomly
[--end]

##### [mc] The process of small droplets combining to form larger ones is driven by the desire to:
- [ ] Increase the total volume
- [x] Minimize surface energy by reducing surface area
- [ ] Maximize the number of droplets
- [ ] Equalize the surface energy per unit volume among droplets
[--end]


##### [mc] What is the volume of a sphere with a radius of $r = 3 \, \text{cm}$? Use the formula $V_{\text{sphere}} = \frac{4}{3} \pi r^3$.
- [x] $36 \pi \, \text{cm}^3$
- [ ] $18 \pi \, \text{cm}^3$
- [ ] $27 \pi \, \text{cm}^3$
- [ ] $54 \pi \, \text{cm}^3$
[feedback]
Using the formula $V_{\text{sphere}} = \frac{4}{3} \pi (3)^3 = \frac{4}{3} \pi \times 27 = 36 \pi \, \text{cm}^3$.
[--feedback]
[--end]


##### [mc] What is the surface area of a sphere with a radius of $r = 5 \, \text{cm}$? Use the formula $A_{\text{sphere}} = 4 \pi r^2$.
- [x] $100 \pi \, \text{cm}^2$
- [ ] $50 \pi \, \text{cm}^2$
- [ ] $25 \pi \, \text{cm}^2$
- [ ] $75 \pi \, \text{cm}^2$
[feedback]
Using the formula $A_{\text{sphere}} = 4 \pi (5)^2 = 4 \pi \times 25 = 100 \pi \, \text{cm}^2$.
[--feedback]
[--end]



##### [mc] Calculate the surface area to volume ratio for a sphere with radius $r = 6$.
- [ ] 1.5 cm
- [x] 2 cm
- [ ] 3 cm
- [ ] 4 cm
[feedback]
1. Derivation:
   $$
   \frac{V}{A} = \frac{\frac{4}{3} \pi r^3}{4 \pi r^2} = \frac{r}{3}
   $$
2. Calculation: For $r = 6 \, \text{cm}$:
   $$
   \frac{V}{A} = \frac{6}{3} = 2 \, \text{cm}
   $$

[--feedback]
[--end]



##### [mc] As the radius $r$ of a sphere increases, what happens to the ratio of volume to surface area, $\frac{V}{A}$?
- [ ] It remains constant
- [ ] It decreases
- [x] It increases
- [ ] It oscillates
[--end]

##### [mc] Why do larger spheres have a smaller surface area relative to their volume compared to smaller spheres?
- [ ] Because the surface area increases faster than the volume as $r$ increases
- [ ] Because the surface area and volume increase at the same rate as $r$ increases
- [x] Because the volume increases faster than the surface area as $r$ increases
- [ ] Because the surface area decreases as $r$ increases
[--end]

##### [mc] As the radius $r$ of a droplet increases, which of the following statements is true regarding surface energy per unit volume?
- [ ] Larger droplets have higher surface energy per unit volume than smaller droplets
- [x] Larger droplets have lower surface energy per unit volume than smaller droplets
- [ ] The surface energy per unit volume remains the same regardless of droplet size
- [ ] Surface energy per unit volume only depends on temperature, not size
[--end]

##### [mc] Which of the following statements best describes the relationship between $r$ and $\frac{V}{A}$?
- [ ] The ratio $\frac{V}{A}$ decreases as $r$ increases
- [ ] The ratio $\frac{V}{A}$ is independent of $r$
- [x] The ratio $\frac{V}{A}$ increases as $r$ increases
- [ ] The ratio $\frac{V}{A}$ is always equal to 3
[--end]

##### [mc] Which of the following is true regarding the surface area and volume of larger versus smaller droplets?
- [x] Larger droplets have a smaller surface area relative to their volume than smaller droplets
- [ ] Larger droplets have a larger surface area relative to their volume than smaller droplets
- [ ] Both large and small droplets have the same surface area relative to their volume
- [ ] Larger droplets have no surface area in relation to their volume
[--end]


##### [mc] Consider the volume and surface area of a cube with side length $a$ and a sphere with radius $r$. Which of the following statements is true regarding the volume-to-surface-area ratio of both shapes as the characteristic length (side length $a$ for the cube or radius $r$ for the sphere) increases?
- [ ] The ratio remains constant for both the cube and the sphere
- [ ] The ratio decreases for both the cube and the sphere
- [x] The ratio increases for both the cube and the sphere
- [ ] The ratio increases for the sphere but remains constant for the cube
[--end]

##### [mc] The volume-to-surface area ratio increases for both the cube and the sphere as the side length $a$ for the cube or radius $r$ for the sphere increases. How does this increase in the volume-to-surface-area ratio for both shapes affect surface energy?
- [x] It decreases surface energy per unit volume as the characteristic length increases
- [ ] It increases surface energy per unit volume as the characteristic length increases
- [ ] It has no effect on surface energy per unit volume
- [ ] Surface energy per unit volume is unrelated to the volume-to-surface-area ratio
[--end]

##### [mc] Consider a sphere with radius $r$ and a cube with side length $a$, where $r = a$. Which of the following statements best explains why a sphere is energetically more favorable than a cube in terms of surface energy for the same characteristic length?
- [ ] The sphere has a higher surface area relative to its volume than the cube, which lowers surface energy.
- [x] The sphere has a lower surface area relative to its volume than the cube, which minimizes surface energy.
- [ ] The sphere and cube have the same surface area relative to their volume, so shape does not affect surface energy.
- [ ] The cube has a lower surface area relative to its volume, making it more energetically favorable.
[--end]

##### [mc] Why do droplets tend to form spherical shapes in nature?
- [x] Spherical shapes minimize surface area relative to volume, reducing surface tension and surface energy.
- [ ] Spherical shapes maximize surface area relative to volume, increasing surface tension.
- [ ] Spherical shapes reduce internal pressure, making them energetically unfavorable.
- [ ] Spherical shapes maximize surface energy for stability.
[--end]


