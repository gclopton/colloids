
# Homework 1


##### 1. Using SymPy, (a) Find the derivative of $f(x, y)=\quad-8 x^3-2 x-2 y+9$ with respect to $x$ . (b) Find the derivative of $f(x, y)$ with respect to $y$.

```Python
import sympy as sp

# Define the variables
x, y = sp.symbols('x y')

# Define the function f(x, y)
f = -8 * x**3 - 2 * x - 2 * y + 9

# Compute the derivative with respect to x
df_dx = sp.diff(f, x)

# Compute the derivative with respect to y
df_dy = sp.diff(f, y)

df_dx, df_dy

```


##### 2. Using SymPy, find the total derivative of $f(x, y)=\quad-4 x^2-x-2 y^4-9 y^3+7 y^2+8 y+4$.


```Python
# Define the function f(x, y)
f_total = -4 * x**2 - x - 2 * y**4 - 9 * y**3 + 7 * y**2 + 8 * y + 4

# Compute the partial derivatives with respect to x and y
df_total_dx = sp.diff(f_total, x)
df_total_dy = sp.diff(f_total, y)

# Compute the total derivative using the chain rule
df_total = df_total_dx * sp.diff(x, x) + df_total_dy * sp.diff(y, y)

df_total_dx, df_total_dy, df_total

```



##### 3. You have found and synthesized a new colloid with a "football" shape. It's shape is best described by $f(x)=\quad 4 \sin (4 x)$ between 0 and $\frac{\pi}{4}$ rotated around the $x$-axis. Using SymPy, compute the volume of the colloid by integration.


```Python
# Define the function f(x) for the football-shaped colloid
f_x = 4 * sp.sin(4 * x)

# Define the limits of integration
x_start = 0
x_end = sp.pi / 4

# Compute the volume by integrating the surface area of revolution around the x-axis
volume = sp.integrate(sp.pi * f_x**2, (x, x_start, x_end))

volume.simplify()
```


##### Write the formula for the volume of a solid of revolution.

$$
V=\pi \int_a^b[f(x)]^2 d x
$$


##### You want to calculate the volume of the colloid described by$f(x)=4 \sin (4 x)$ between 0 and $\frac{\pi}{4}$. Which integral is correct?
- [x] $V=\pi \int_0^{\frac{\pi}{4}}[4 \sin (4 x)]^2 d x$



##### The integral $V=\pi \int_0^{\frac{\pi}{4}} 16 \sin ^2(4 x) d x$ simplifies to which of the following?
- [x] $V=8 \pi \int_0^{\frac{\pi}{4}}(1-\cos (8 x)) d x$




##### 3. You have found and synthesized a new colloid with a "football" shape. It's shape is best described by $f(x)=\quad 4 \sin (4 x)$ between 0 and $\frac{\pi}{4}$ rotated around the $x$-axis. By hand, compute the volume of the colloid by integration.


To calculate the volume of the colloid described by$f(x)=4 \sin (4 x)$ between 0 and $\frac{\pi}{4}$, rotated around the $x$-axis, we use the formula for the volume of a solid of revolution:

$$
V=\pi \int_a^b[f(x)]^2 d x
$$



Step 1: Set up the integral
Given $f(x)=4 \sin (4 x)$, the volume $V$ is:

$$
V=\pi \int_0^{\frac{\pi}{4}}[4 \sin (4 x)]^2 d x
$$



Step 2: Simplify the integrand
First, square the function:

$$
[4 \sin (4 x)]^2=16 \sin ^2(4 x)
$$


Now, the integral becomes:

$$
V=\pi \int_0^{\frac{\pi}{4}} 16 \sin ^2(4 x) d x
$$
Step 3: Simplify the integral using a trigonometric identity
The identity $\sin ^2(\theta)=\frac{1-\cos (2 \theta)}{2}$ can be used:

$$
\sin ^2(4 x)=\frac{1-\cos (8 x)}{2}
$$


Substituting into the integral:

$$
V=\pi \int_0^{\frac{\pi}{4}} 16 \cdot \frac{1-\cos (8 x)}{2} d x
$$


Simplify the constant factor:

$$
V=8 \pi \int_0^{\frac{\pi}{4}}(1-\cos (8 x)) d x
$$
Step 4: Integrate each term
Now, integrate term by term:

$$
\begin{gathered}
\int_0^{\frac{\pi}{4}} 1 d x=\left.x\right|_0 ^{\frac{\pi}{4}}=\frac{\pi}{4}-0=\frac{\pi}{4} \\
\int_0^{\frac{\pi}{4}} \cos (8 x) d x=\left.\frac{\sin (8 x)}{8}\right|_0 ^{\frac{\pi}{4}}=\frac{\sin (2 \pi)}{8}-\frac{\sin (0)}{8}=0
\end{gathered}
$$


Thus, the integral simplifies to:

$$
V=8 \pi\left(\frac{\pi}{4}-0\right)=8 \pi \cdot \frac{\pi}{4}=2 \pi^2
$$

##### 4. You have found and synthesized a new colloid with a "football" shape. It's shape is best described by $f(x)=\quad 6 \sin (5 x)$ between 0 and $\frac{\pi}{5}$ rotated around the $x$-axis. Using SymPy, Compute the surface area of the colloid by integration. Please provide your answer as numeric result.


```Python
# Define the function and its derivative
f_x_football = 6 * sp.sin(5 * x)
f_prime_x = sp.diff(f_x_football, x)

# Set up the surface area integral
integrand = f_x_football * sp.sqrt(1 + f_prime_x**2)
surface_area_integral = 2 * sp.pi * sp.integrate(integrand, (x, 0, sp.pi / 5))

surface_area_integral.evalf()

```


##### Write the formula used to find the surface area of a solid of revolution.

$$
A=2 \pi \int_a^b f(x) \sqrt{1+\left(\frac{d f}{d x}\right)^2} d x
$$


##### You want to find the surface area of a solid of revolution formed by rotating $f(x)=\quad 6 \sin (5 x)$ between 0 and $\frac{\pi}{5}$ rotated around the $x$-axis. Which of the following represents the correct expression?

- [x] $A=2 \pi \int_0^{\frac{\pi}{5}} 6 \sin (5 x) \sqrt{1+(30 \cos (5 x))^2} d x$


---

To find the surface area of a solid of revolution, you can use the following formula:

$$
A=2 \pi \int_a^b f(x) \sqrt{1+\left(\frac{d f}{d x}\right)^2} d x
$$


Given the function $f(x)=6 \sin (5 x)$ between 0 and $\frac{\pi}{5}$, we can calculate the surface area.
Step 1: Calculate the derivative of $f(x)$
First, find the derivative of $f(x)$ with respect to $x$ :

$$
f^{\prime}(x)=\frac{d}{d x}[6 \sin (5 x)]=30 \cos (5 x)
$$


Step 2: Set up the integral
Now substitute $f(x)$ and $f^{\prime}(x)$ into the surface area formula:

$$
A=2 \pi \int_0^{\frac{\pi}{5}} 6 \sin (5 x) \sqrt{1+(30 \cos (5 x))^2} d x
$$


This simplifies to:


$$
A=12 \pi \int_0^{\frac{\pi}{5}} \sin (5 x) \sqrt{1+900 \cos ^2(5 x)} d x
$$


Step 3: Evaluate the integral
This integral can be quite complex to solve analytically due to the square root term. However, it can be solved using numerical methods. Here's how to set it up for numerical evaluation:

$$
A \approx 12 \pi \int_0^{\frac{\pi}{5}} \sin (5 x) \sqrt{1+900 \cos ^2(5 x)} d x
$$


Let's evaluate this integral numerically.




##### 5. Definitions

- **Temperature:** Temperature is a fundamental thermodynamic quantity that represents the distribution of thermal energy within a system. 
	- It is a measure of the average kinetic energy of the particles in a substance. 
	- Temperature determines the direction of heat transfer between systems: heat flows spontaneously from regions of higher temperature to regions of lower temperature. 
	- In statistical mechanics, temperature $T$ is related to the change in entropy $S$ with respect to the internal energy $U$ at constant volume and particle number, defined as:

$$
\frac{1}{T}=\left(\frac{\partial S}{\partial U}\right)_{V, N}
$$


- **Entropy:** Entropy is a measure of the number of microscopic configurations that correspond to a thermodynamic system's macroscopic state, reflecting the system's degree of disorder or randomness. 
	- In classical thermodynamics, entropy $S$ is defined as a state function that quantifies the irreversibility of processes. The change in entropy $d S$ is related to the reversible heat exchange $\delta Q_{r e v}$ and temperature $T$ by the relation:

$$
d S=\frac{\delta Q_{r e v}}{T}
$$


	- In statistical mechanics, entropy is given by the Boltzmann formula:

$$
S=k_B \ln \Omega
$$

where $k_B$ is Boltzmann's constant and $\Omega$ is the number of accessible microstates. Entropy increases in spontaneous processes, leading to the second law of thermodynamics.

- **Internal energy:** Internal energy $U$ is the total energy contained within a thermodynamic system, encompassing both the kinetic and potential energies of the particles that make up the system. It is a state function, meaning it depends only on the current state of the system, not on the path taken to reach that state. The internal energy can change through heat transfer and work done on or by the system. Mathematically, the differential form of internal energy in terms of heat $\delta Q$ and work $\delta W$ is:

$$
d U=\delta Q-\delta W
$$


For a closed system, $d U$ can also be expressed as:

$$
d U=T d S-P d V+\sum_i \mu_i d N_i
$$

where $T$ is temperature, $S$ is entropy, $P$ is pressure, $V$ is volume, $\mu_i$ is the chemical potential, and $N_i$ is the number of particles of species $i$.

**Chemical potential:** The chemical potential $\mu$ is the partial molar Gibbs free energy, representing the change in the Gibbs free energy $G$ of a system when an additional particle is introduced, keeping temperature, pressure, and the number of other particles constant. It is a crucial quantity in determining the equilibrium and transport properties of systems with multiple species. The chemical potential is defined as:

$$
\mu=\left(\frac{\partial G}{\partial N}\right)_{T, P, \text { others }}
$$


In a system at equilibrium, the chemical potential is uniform across all phases and species. It drives diffusion, chemical reactions, and phase changes.

**Helmholtz free energy:** The Helmholtz free energy $F$ (or $A$ ) is a thermodynamic potential that measures the useful work obtainable from a closed system at constant temperature and volume. It is defined as:

$$
F=U-T S
$$

where $U$ is the internal energy, $T$ is the temperature, and $S$ is the entropy. The Helmholtz free energy reaches a minimum at equilibrium for systems with constant $T$ and $V$. It is particularly useful in systems where volume is held constant, and it provides a criterion for spontaneous processes and equilibrium under these conditions.

**Isothermal process:** An isothermal process is a thermodynamic process in which the temperature $T$ of a system remains constant. During an isothermal process, the internal energy of an ideal gas remains unchanged, meaning any work done by or on the system must be accompanied by an equal amount of heat exchange with the surroundings. For an ideal gas undergoing an isothermal process, the work done $W$ is given by:

$$
W=n R T \ln \left(\frac{V_f}{V_i}\right)
$$

where $n$ is the number of moles, $R$ is the gas constant, and $V_i$ and $V_f$ are the initial and final volumes, respectively. Isothermal processes are often used as idealized models in the study of thermodynamic cycles.


**Gibbs free energy:** The Gibbs free energy $G$ is a thermodynamic potential that measures the maximum reversible work obtainable from a closed system at constant temperature and pressure. It is defined as:

$$
G=H-T S
$$

where $H$ is the enthalpy, $T$ is the temperature, and $S$ is the entropy. The Gibbs free energy is a fundamental criterion for spontaneity in processes occurring at constant temperature and pressure. A process will spontaneously proceed if it results in a decrease in the Gibbs free energy $(\Delta G<0)$. At equilibrium, the Gibbs free energy is minimized, and no net change occurs in the system.



##### 6 Thermodynamic Laws


**Zeroth Law of Thermodynamics:** The Zeroth Law of Thermodynamics establishes the concept of temperature as a fundamental and measurable property. It states that if two thermodynamic systems, $A$ and $B$, are each in thermal equilibrium with a third system $C$, then $A$ and $B$ are in thermal equilibrium with each other. This law allows for the definition of temperature in a way that can be empirically measured, leading to the construction of thermometers and the establishment of a temperature scale.

Mathematically:

$$
\text { If } T(A)=T(C) \text { and } T(B)=T(C), \text { then } T(A)=T(B)
$$


This law implies that temperature is a transitive property and establishes a basis for comparing temperatures across different systems.



**First Law of Thermodynamics:** The First Law of Thermodynamics is a statement of the conservation of energy, asserting that energy can neither be created nor destroyed, only transferred or transformed from one form to another. In the context of thermodynamics, this law relates changes in the internal energy $U$ of a system to the heat $Q$ added to the system and the work $W$ done by the system on its surroundings:

$$
\Delta U=Q-W
$$


For infinitesimal changes, this can be expressed as:

$$
d U=\delta Q-\delta W
$$


This law implies that the total energy of an isolated system is constant, and energy changes in a system must be accounted for by corresponding changes in heat and work. In differential form, for a closed system:

$$
d U=T d S-P d V+\sum_i \mu_i d N_i
$$

where $T$ is the temperature, $S$ is entropy, $P$ is pressure, $V$ is volume, $\mu_i$ is the chemical potential, and $N_i$ is the number of particles of species $i$.


**Second Law of Thermodynamics:** The Second Law of Thermodynamics introduces the concept of entropy and asserts that the entropy of an isolated system always increases or remains constant over time; it never decreases. This law provides a direction to thermodynamic processes, indicating that natural processes are irreversible and tend to move towards a state of maximum entropy or thermodynamic equilibrium.

There are multiple equivalent formulations of the second law, including:
- _Clausius Statement:_ Heat cannot spontaneously flow from a colder body to a hotter body without external work being performed.
- _Kelvin-Planck Statement:_ It is impossible to construct a heat engine that operates in a cycle and produces no other effect than the transfer of heat from a single reservoir and the performance of an equivalent amount of work.

Mathematically, for a reversible process, the second law can be expressed as:

$$
d S=\frac{\delta Q_{\text {rev }}}{T}
$$


For an irreversible process:

$$
d S>\frac{\delta Q}{T}
$$


The second law also implies that the total entropy of the universe, or any isolated system, tends to increase, driving systems towards thermodynamic equilibrium.


**Third Law of Thermodynamics:** The Third Law of Thermodynamics states that as the temperature of a system approaches absolute zero $(0 \mathrm{~K})$, the entropy of the system approaches a minimum value. For a perfect crystalline substance at absolute zero, the entropy becomes exactly zero, because there is only one possible microstate (perfect order), and thus $\Omega=1$, where $\Omega$ is the number of microstates.

Mathematically, the third law is often expressed as:

$$
\lim _{T \rightarrow 0} S=S_0
$$

where $S_0$ is a constant, and for a perfect crystal, $S_0=0$.
This law has profound implications for the behavior of materials at very low temperatures, indicating that it is impossible to reach absolute zero through any finite number of processes, as the entropy change required to achieve such a state would involve an infinite number of steps. It also implies that specific heat, $C$, which is related to the change in entropy with temperature, tends to zero as temperature approaches zero:

$$
C \rightarrow 0 \quad \text { as } \quad T \rightarrow 0
$$


##### 7. Write a Python function plot_sine that plots a sine function in the range of 0 to π using numpy's linspace function with 100 points. **Note:** Your function needs to return the axis object.

```Python
import numpy as np
import matplotlib.pyplot as plt

def plot_sine():
    # Create 100 points between 0 and π
    x = np.linspace(0, np.pi, 100)
    # Calculate the sine of each point
    y = np.sin(x)
    
    # Create a plot
    fig, ax = plt.subplots()
    ax.plot(x, y)
    
    # Set labels
    ax.set_xlabel('x')
    ax.set_ylabel('sin(x)')
    ax.set_title('Sine Function from 0 to π')
    
    # Display the plot
    plt.show()
    
    # Return the axis object
    return ax

plot_sine()
```


