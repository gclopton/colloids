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
- [ ] Maximization of pressure and minimization of volume.
- [ ] Minimization of energy and maximization of disorder.
[--end]

##### [mc] How does a system tend to minimize its bulk free energy?
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
- [ ] If the gain in bulk free energy from phase separation equals the cost of creating an interface (ΔE_b = E_s).
- [x] If the gain in bulk free energy from phase separation is greater than the cost of creating an interface (ΔE_b > E_s).
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
1. Calculate the Gibbs free energy change $\Delta G$ for this reaction.
2. Determine if the reaction is spontaneous under these conditions.
[answ]
~~~Python
import pint

# Initialize pint unit registry
ureg = pint.UnitRegistry()

def calculate_gibbs_free_energy(delta_H, temperature, delta_S):
    """
    Calculate the Gibbs free energy change and determine spontaneity.
    
    Parameters:
    - delta_H: Enthalpy change with units (e.g., -85 * ureg.kilojoule)
    - temperature: Temperature with units (e.g., 298 * ureg.kelvin)
    - delta_S: Entropy change with units (e.g., -120 * ureg.joule / ureg.kelvin)
    
    Returns:
    - delta_G: Gibbs free energy change with units
    - spontaneous: Boolean indicating if the reaction is spontaneous
    """
    # Ensure units for delta_H are in joules to match delta_S units
    delta_H = delta_H.to(ureg.joule)
    
    # Calculate Gibbs free energy change: ΔG = ΔH - TΔS
    delta_G = delta_H - (temperature * delta_S)
    
    # Determine spontaneity
    spontaneous = delta_G.magnitude < 0
    
    return delta_G, spontaneous

# Example usage
delta_H = -85 * ureg.kilojoule  # Enthalpy change
temperature = 298 * ureg.kelvin  # Temperature
delta_S = -120 * ureg.joule / ureg.kelvin  # Entropy change

delta_G, spontaneous = calculate_gibbs_free_energy(delta_H, temperature, delta_S)

print(f"Gibbs free energy change (ΔG): {delta_G:.2f}")
print("The reaction is spontaneous." if spontaneous else "The reaction is not spontaneous.")
~~~
[--answ]
[--end]

##### [sa] A gas is confined in a container at constant volume and a temperature of 310 K . The internal energy change $\Delta U$ for the process is -45 kJ , and the entropy change $\Delta S$ for the system is $-85 \mathrm{~J} / \mathrm{K}$
1. Calculate the Helmholtz free energy change $\Delta F$ for this process.
2. Determine if this process results in a decrease in the system's free energy at constant volume and temperature.
[answ]
~~~Python
import pint

ureg = pint.UnitRegistry()

def calculate_helmholtz_free_energy(delta_U, temperature, delta_S):
    delta_U = delta_U.to(ureg.joule)
    delta_F = delta_U - (temperature * delta_S)
    favorable = delta_F.magnitude < 0
    return delta_F, favorable

delta_U = -45 * ureg.kilojoule
temperature = 310 * ureg.kelvin
delta_S = -85 * ureg.joule / ureg.kelvin

delta_F, favorable = calculate_helmholtz_free_energy(delta_U, temperature, delta_S)

print(f"Helmholtz free energy change (ΔF): {delta_F:.2f}")
print("The process decreases the system's free energy." if favorable else "The process does not decrease the system's free energy.")
~~~
[--answ]
[--end]



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
- [ ] Volume, temperature, and pressure
[--end]



