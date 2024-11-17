
# 2.1. Work of Cohesion
##### Consider the system containing water and air. What is the work of cohesion (per unit area) assosciated with going from picture 1 to picture 2. 
A.) Assume the wall of the box does not interact with anything in the box. The surface tension is $72 \frac{\mathrm{mN}}{\mathrm{m}}$. Find $W_{ww} in frac{mN}{m}$
B.) If the box has an area of $4356 \mathrm{~cm}^2$ and a height of 124 cm , how much energy (in $mJ$) does it take to seperate these two surfaces (ignore gravity)? 
C.) If the liquid was mercury instead of water, would the energy be higher or lower?

![[Screenshot 2024-09-05 at 19.13.13.png|500]]


###### solution


```Python
import pint

# Create a unit registry
ureg = pint.UnitRegistry()

# Define the surface tension in mN/m
surface_tension = 72 * ureg.millinewton / ureg.meter

# Convert to N/m
surface_tension_N_per_m = surface_tension.to(ureg.newton / ureg.meter)
print(surface_tension_N_per_m)
```


**Part A: Work of Cohesion $W_{w w}$**
The work of cohesion is defined as the energy required to split a unit area of a substance into two surfaces. Mathematically, it is related to the surface tension $\gamma$. For water, the work of cohesion per unit area $W_{w w}$ is:

$$
W_{w w}=2 \gamma
$$


Given that the surface tension of water is $\gamma=72 \frac{\mathrm{mN}}{\mathrm{m}}$, the work of cohesion for water is:

$$
W_{w w}=2 \times 72 \frac{\mathrm{mN}}{\mathrm{m}}=144 \frac{\mathrm{mN}}{\mathrm{m}}
$$


**Part B: Energy Required to Separate the Surfaces**
To find the total energy required to separate the two surfaces of the water in the box, we need to multiply the work of cohesion by the total surface area of the water.

The surface area of the box is given as $4356 \mathrm{~cm}^2$, and we need to convert it to square meters:

$$
4356 \mathrm{~cm}^2=0.4356 \mathrm{~m}^2
$$


Now, the total energy $E$ required to separate the water is:

$$
E=W_{w w} \times A=144 \frac{\mathrm{mN}}{\mathrm{m}} \times 0.4356 \mathrm{~m}^2
$$


Since $1 \mathrm{mN} \cdot \mathrm{m}=1 \mathrm{~mJ}$, the energy in millijoules is:

$$
E=144 \times 0.4356=62.7264 \mathrm{~mJ}
$$


**Part C: Energy for Mercury**
The surface tension of mercury is much higher than that of water. The surface tension for mercury is approximately $\gamma_{\mathrm{Hg}}=485 \frac{\mathrm{mN}}{\mathrm{m}}$.

Since the work of cohesion is proportional to the surface tension, the work of cohesion for mercury would be:

$$
W_{\mathrm{Hg}}=2 \times 485 \frac{\mathrm{mN}}{\mathrm{m}}=970 \frac{\mathrm{mN}}{\mathrm{m}}
$$


Comparing this to water's work of cohesion:

$$
W_{\mathrm{Hg}}>W_{\text {water }}
$$


Thus, the energy required to separate mercury would be significantly higher than the energy required to separate water.

Summary:
- A) $W_{u w}=144 \frac{\mathrm{mN}}{\mathrm{m}}$
- B) $E=62.7264 \mathrm{~mJ}$
- C) The energy required to separate mercury would be higher than for water due to its much higher surface tension.


#### You clean a thin Pt foil strip ( 6.29 cm long and $22.49 \mu \mathrm{m}$ thick) by placing it in a red-hot flame, then you suspend it from an accurate balance so that its bottom edge just touches a dish of water. The water completely wets the Pt foil and results in a contact angle of zero degree, $0^{\circ}$. You can ignore the buoyancy effects in this system.

##### A.) Estimate the surface tension $\gamma$ of the water if the extra weight read by the balance is 918 mg . Note that the correct units are part of your answer! $\gamma$ = Number(2 significant figures) + Unit (Wilhelmy plate $\gamma=\frac{F_{\text {measured }}}{\ell \cdot \cos \theta}$)

The surface tension formula using the Wilhelmy plate method is:

$$
\gamma=\frac{F_{\text {measured }}}{\ell \cdot \cos \theta}
$$

**where:**
- $F_{\text {measured }}$ is the force measured by the balance,
- $\quad \ell$ is the perimeter of the Pt foil in contact with the water,
- $\theta$ is the contact angle.

**In this case:**
- The force is derived from the mass $m=918 \mathrm{mg}=918 \times 10^{-3} \mathrm{~g}=918 \times 10^{-6} \mathrm{~kg}$,
- The perimeter $\ell=0.12584498 \mathrm{~m}$ (calculated from the length and thickness of the foil),
- The contact angle $\theta=0^{\circ}$, so $\cos \theta=1$.

Step 1: Convert the mass to force
The force is calculated as:

$$
F_{\text {measured }}=m \cdot g=918 \times 10^{-6} \mathrm{~kg} \times 9.81 \mathrm{~m} / \mathrm{s}^2=9.004 \times 10^{-3} \mathrm{~N}
$$


Step 2: Solve for $\gamma$
Now, substitute the values into the formula for surface tension:

$$
\gamma=\frac{9.004 \times 10^{-3} \mathrm{~N}}{0.12584498 \mathrm{~m} \times 1}=0.07155 \mathrm{~N} / \mathrm{m}
$$


To express this in millinewtons per meter:

$$
\gamma=0.07155 \mathrm{~N} / \mathrm{m}=71.55 \mathrm{mN} / \mathrm{m}
$$


So, the surface tension $\gamma$ is approximately $71.55 \mathrm{mN} / \mathrm{m}$, which is very close to the value you provided.


==Modification:== def surface_tension(mass, length, thickness, contact_angle, units="N/m", sig_figs=2):

```Python
import pint

# Create a Unit Registry to handle units
ureg = pint.UnitRegistry()

def surface_tension(mass, length, thickness, contact_angle, units="N/m", sig_figs=2):
    """
    Calculate surface tension using the Wilhelmy plate method with unit handling via pint.
    
    Parameters:
    - mass: Mass in mg
    - length: Length of the plate in cm
    - thickness: Thickness of the plate in micrometers
    - contact_angle: Contact angle in degrees
    - units: Desired units for surface tension (can handle any unit using pint)
    - sig_figs: Number of significant figures for the final result
    
    Returns:
    - Surface tension with the specified units and precision
    """
    # Constants
    g = 9.81 * ureg.meter / ureg.second**2  # gravitational acceleration in m/s^2
    
    # Convert inputs to proper units using pint
    mass_kg = (mass * ureg.milligram).to(ureg.kilogram)  # convert mass from mg to kg
    length_m = (length * ureg.centimeter).to(ureg.meter)  # convert length from cm to m
    thickness_m = (thickness * ureg.micrometer).to(ureg.meter)  # convert thickness from micrometers to meters
    
    # Calculate force (mass * gravity)
    force = mass_kg * g  # F = mg in Newtons
    
    # Calculate perimeter of the plate
    perimeter = 2 * (length_m + thickness_m)
    
    # Convert contact angle to radians and calculate cos(theta)
    cos_theta = math.cos(math.radians(contact_angle))
    
    # Calculate surface tension in N/m
    surface_tension_value = force / (perimeter * cos_theta)
    
    # Convert surface tension to desired units
    surface_tension_converted = surface_tension_value.to(units)
    
    # Round to the desired significant figures
    surface_tension_rounded = round(surface_tension_converted.magnitude, sig_figs)
    
    # Return the value with units
    return f"{surface_tension_rounded} {surface_tension_converted.units}"

# Example usage:
surface_tension(918, 6.29, 22.49, 0, "mN/m", 8)
```


##### B.) If you don't clean the Pt foil right before the measurement, the Pt foil might be covered with organic moieties and make the contact angle larger. Assume in this case, the contact angle becomes $43^{\circ}$ and the surface tension is the same as in the previous part, calculate what the weight $m$ read by the balance will be. Note that the correct units are part of your answer! $m$ = Number (2 significant figures) + Unit

To calculate the new weight $m$ read by the balance when the contact angle increases to $43^{\circ}$, we need to account for the effect of the contact angle on the force exerted by surface tension.

The general formula for surface tension using the Wilhelmy plate method is:

$$
\gamma=\frac{F_{\text {measured }}}{\ell \cdot \cos \theta}
$$


**From part A, we already know:**
- The surface tension $\gamma=0.072 \mathrm{~N} / \mathrm{m}$,
- The perimeter of the foil $\ell=0.12584498 \mathrm{~m}$.

**Step 1: Calculate the force $F_{\text {measured }}$ for $\theta=43^{\circ}$**
Rearrange the formula to solve for the new force $F_{\text {measured: }}$ :

$$
F_{\text {measured }}=\gamma \cdot \ell \cdot \cos \theta
$$


Substitute the known values:

$$
F_{\text {mensured }}=0.072 \mathrm{~N} / \mathrm{m} \times 0.12584498 \mathrm{~m} \times \cos 43^{\circ}
$$


Using $\cos 43^{\circ} \approx 0.7314$

$$
F_{\text {measured }}=0.072 \times 0.12584498 \times 0.7314=0.006619 \mathrm{~N}
$$


**Step 2: Calculate the corresponding weight $m$**
The weight is related to the force by the equation $F=m g$, so:

$$
m=\frac{F_{\text {measured }}}{g}
$$


Substitute $F_{\text {measured }}=0.006619 \mathrm{~N}$ and $g=9.81 \mathrm{~m} / \mathrm{s}^2$ :

$$
m=\frac{0.006619}{9.81}=6.747 \times 10^{-4} \mathrm{~kg}
$$


Convert to milligrams $(\mathrm{mg})$ :

$$
m=6.747 \times 10^{-4} \mathrm{~kg} \times 10^6 \mathrm{mg} / \mathrm{kg}=674.7 \mathrm{mg}
$$


**Final Answer:**
The weight read by the balance is approximately:

$$
m=670 \mathrm{mg}
$$


Thus, $m=670 \mathrm{mg}$ (to two significant figures).


```Python
import math
import pint

# Create a Unit Registry to handle units
ureg = pint.UnitRegistry()

def calculate_mass(surface_tension_value, length, thickness, contact_angle, output_units="mg", sig_figs=2):
    """
    Calculate the mass given surface tension using the Wilhelmy plate method with unit handling via pint.
    
    Parameters:
    - surface_tension_value: Tuple containing surface tension value and units (e.g., (71.55, "mN/m"))
    - length: Tuple containing length value and units (e.g., (6.29, "cm"))
    - thickness: Tuple containing thickness value and units (e.g., (22.49, "um"))
    - contact_angle: Tuple containing contact angle value and units (e.g., (43, "deg"))
    - output_units: Desired units for mass output (e.g., mg, g, kg)
    - sig_figs: Number of significant figures for the final result
    
    Returns:
    - The mass in the desired output units, rounded to the specified number of significant figures
    """
    # Constants
    g = 9.81 * ureg.meter / ureg.second**2  # gravitational acceleration in m/s^2
    
    # Convert inputs to proper units using pint
    length_m = (length[0] * ureg(length[1])).to(ureg.meter)  # convert length to meters
    thickness_m = (thickness[0] * ureg(thickness[1])).to(ureg.meter)  # convert thickness to meters
    surface_tension = (surface_tension_value[0] * ureg(surface_tension_value[1])).to(ureg.newton / ureg.meter)  # convert surface tension to N/m
    
    # Calculate perimeter of the plate
    perimeter = 2 * (length_m + thickness_m)
    
    # Convert contact angle to radians and calculate cos(theta)
    cos_theta = math.cos(math.radians((contact_angle[0] * ureg(contact_angle[1])).to(ureg.degrees).magnitude))
    
    # Calculate force: F = γ * perimeter * cos(theta)
    force = surface_tension * perimeter * cos_theta
    
    # Calculate mass: F = mg, so m = F / g
    mass = force / g
    
    # Convert mass to the desired output units
    mass_converted = mass.to(output_units)
    
    # Round to the desired significant figures
    mass_rounded = round(mass_converted.magnitude, sig_figs)
    
    # Return the value with units
    return f"{mass_rounded} {mass_converted.units}"

# Example usage:
calculate_mass((71.55, "mN/m"), (6.29, "cm"), (22.49, "um"), (43, "deg"), "mg", 5)
```


#### Assume you break a big cube of $2.38 \mathrm{~cm} \times 2.38 \mathrm{~cm} \times 2.38 \mathrm{~cm}$ into a powder composed of many small and smooth cubes of $200.54 \mathrm{~nm} \times 200.54 \mathrm{~nm} \times 200.54 \mathrm{~nm}$. Consider the density of the material to be $1.12 \mathrm{~g} / \mathrm{cm}^3$. 
##### A.) How many small cubes will you end up with?

**Step 1: Calculate the volume of the big cube**
The big cube has dimensions $2.38 \mathrm{~cm} \times 2.38 \mathrm{~cm} \times 2.38 \mathrm{~cm}$, so its volume $V_{\text {big }}$ is:

$$
V_{\mathrm{big}}=2.38 \mathrm{~cm} \times 2.38 \mathrm{~cm} \times 2.38 \mathrm{~cm}=13.487272 \mathrm{~cm}^3
$$


**Step 2: Calculate the volume of one small cube**
The small cubes have dimensions $200.54 \mathrm{~nm} \times 200.54 \mathrm{~nm} \times 200.54 \mathrm{~nm}$, but we need to convert these dimensions to centimeters (since the big cube is in cm ):

$$
200.54 \mathrm{~nm}=200.54 \times 10^{-7} \mathrm{~cm}=2.0054 \times 10^{-5} \mathrm{~cm}
$$


Now, the volume $V_{\text {small }}$ of a small cube is:

$$
V_{\text {small }}=2.0054 \times 10^{-5} \mathrm{~cm} \times 2.0054 \times 10^{-5} \mathrm{~cm} \times 2.0054 \times 10^{-5} \mathrm{~cm}=8.065 \times 10^{-15} \mathrm{~cm}^3
$$


**Step 3: Calculate the number of small cubes**
The total number of small cubes $N$ is the ratio of the volume of the big cube to the volume of one small cube:

$$
\begin{gathered}
N=\frac{V_{\text {big }}}{V_{\text {small }}}=\frac{13.487272 \mathrm{~cm}^3}{8.065 \times 10^{-15} \mathrm{~cm}^3} \\
N=1.672 \times 10^{15}
\end{gathered}
$$


**Final Answer:**
The number of small cubes you will end up with is approximately:

$$
N=1.67 \times 10^{15}
$$



##### B.) What is the surface area of each cube? $a = \mu m^{2}$

To calculate the surface area of each small cube, we need to use the formula for the surface area of a cube:

$$
A=6 \times \text { side }^2
$$

where:
- $A$ is the surface area of the cube,
- side is the length of one side of the cube.

The small cube has dimensions of 200.54 nm . Converting this to micrometers $(\mu \mathrm{m})$ :

$$
200.54 \mathrm{~nm}=0.20054 \mu \mathrm{m}
$$


Now, we can calculate the surface area of one small cube:

$$
\begin{gathered}
A=6 \times(0.20054 \mu m)^2 \\
A=6 \times 0.0402162916 \mu m^2 \\
A=0.2412977496 \mu m^2
\end{gathered}
$$


Final Answer:
The surface area of each small cube is approximately:

$$
A=0.2413 \mu \mathrm{m}^2
$$


Let me know if you need any further clarification!


##### C.) What is the volume $v$ of each small cube? $v = \mu m^{3}$

To calculate the volume of each small cube, we use the formula for the volume of a cube:

$$
V=\text { side }^3
$$

where:
- $V$ is the volume of the cube,
- side is the length of one side of the cube.

The side length of each small cube is 200.54 nm . Converting this to micrometers ( $\mu \mathrm{m}$ ):

$$
200.54 \mathrm{~nm}=0.20054 \mu \mathrm{m}
$$


Now, calculate the volume of the small cube:

$$
\begin{gathered}
V=(0.20054 \mu \mathrm{m})^3 \\
V=0.00805856 \mu \mathrm{m}^3
\end{gathered}
$$


##### D.) What is the surface area per mass of the resulting powder? $surf = \frac{m^2}{g}$

We already know that the surface area of each small cube is $A=0.2413 \mu \mathrm{m}^2$. Converting this to square meters:

$$
\begin{gathered}
1 \mu \mathrm{m}^2=1 \times 10^{-12} \mathrm{~m}^2 \\
A=0.2413 \mu \mathrm{m}^2=0.2413 \times 10^{-12} \mathrm{~m}^2=2.413 \times 10^{-13} \mathrm{~m}^2
\end{gathered}
$$


The total number of small cubes $N$ was calculated earlier as approximately $1.67 \times 10^{15}$. The total surface area $A_{\text {total }}$ of all the small cubes is:

$$
\begin{gathered}
A_{\text {total }}=N \times A=1.67 \times 10^{15} \times 2.413 \times 10^{-13} \mathrm{~m}^2 \\
A_{\text {total }}=4.03 \times 10^2 \mathrm{~m}^2
\end{gathered}
$$


Step 2: Calculate the mass of the big cube
The volume of the big cube is:

$$
V_{\text {big }}=13.487 \mathrm{~cm}^3
$$


The density of the material is given as $1.12 \mathrm{~g} / \mathrm{cm}^3$, so the mass $m$ of the big cube is:

$$
m=\text { density } \times V_{\mathrm{big}}=1.12 \mathrm{~g} / \mathrm{cm}^3 \times 13.487 \mathrm{~cm}^3=15.105 \mathrm{~g}
$$


Step 3: Calculate the surface area per mass
The surface area per mass surf is:

$$
\begin{aligned}
\text { surf }= & \frac{A_{\text {total }}}{m}=\frac{4.03 \times 10^2 \mathrm{~m}^2}{15.105 \mathrm{~g}} \\
& \text { surf }=26.67 \frac{\mathrm{m}^2}{g}
\end{aligned}
$$


Final Answer:
The surface area per mass of the resulting powder is approximately:

$$
\text { surf }=26.67 \frac{m^2}{g}
$$


Let me know if you need any further clarification!


```Python
def surf_area(large_cube_length, small_cube_length, density):
    """
    Calculate the surface area per mass when a large cube is broken into smaller cubes.
    
    Parameters:
    - large_cube_length: Length of the large cube in cm
    - small_cube_length: Length of the smaller cubes in nm
    - density: Density of the material in g/cm^3
    
    Returns:
    - surf_per_mass: Surface area per mass in m^2/g
    """
    # Convert the small cube length from nm to cm
    small_cube_length_cm = small_cube_length * 1e-7  # 1 nm = 1e-7 cm

    # Calculate the volume of the large cube in cm^3
    volume_large_cube = large_cube_length ** 3

    # Calculate the volume of a small cube in cm^3
    volume_small_cube = small_cube_length_cm ** 3

    # Calculate the total number of small cubes
    num_small_cubes = volume_large_cube / volume_small_cube

    # Calculate the surface area of one small cube (6 * side^2 for a cube)
    surface_area_small_cube = 6 * (small_cube_length_cm ** 2)

    # Calculate the total surface area
    total_surface_area = num_small_cubes * surface_area_small_cube  # in cm^2

    # Convert total surface area from cm^2 to m^2 (1 cm^2 = 1e-4 m^2)
    total_surface_area_m2 = total_surface_area * 1e-4

    # Calculate the mass of the large cube (mass = density * volume)
    mass_large_cube = density * volume_large_cube  # in grams

    # Calculate the surface area per mass
    surf_per_mass = total_surface_area_m2 / mass_large_cube  # in m^2/g

    return surf_per_mass

# Example usage
surf_per_mass = surf_area(2.38, 200.54, 1.12)
surf_per_mass
```

#### Assume you break a big cube of $2.22 \mathrm{~cm} \times 2.22 \mathrm{~cm} \times 2.22 \mathrm{~cm}$ into a powder composed of many small spheres of diameter 201.52 nm . Consider the density of the material to be $1.05 \mathrm{~g} / \mathrm{cm}^3$.

##### A.) How many small spheres will you end up with?

To calculate how many small spheres you'll end up with when breaking a large cube into many small spheres, we'll follow these steps:

**Step 1: Calculate the volume of the big cube**
The big cube has dimensions $2.22 \mathrm{~cm} \times 2.22 \mathrm{~cm} \times 2.22 \mathrm{~cm}$. The volume $V_{\mathrm{big}}$ of the big cube is:

$$
V_{\mathrm{big}}=2.22 \mathrm{~cm} \times 2.22 \mathrm{~cm} \times 2.22 \mathrm{~cm}=10.941 \mathrm{~cm}^3
$$


**Step 2: Calculate the volume of one small sphere**
The small spheres have a diameter of 201.52 nm , which needs to be converted to centimeters:

$$
201.52 \mathrm{~nm}=201.52 \times 10^{-7} \mathrm{~cm}=2.0152 \times 10^{-5} \mathrm{~cm}
$$


The radius $r$ of a sphere is half the diameter:

$$
r=\frac{2.0152 \times 10^{-5}}{2}=1.0076 \times 10^{-5} \mathrm{~cm}
$$


The volume $V_{\text {small }}$ of one small sphere is given by the formula for the volume of a sphere:

$$
V_{\mathrm{small}}=\frac{4}{3} \pi r^3
$$


Substitute the value of the radius:

$$
\begin{aligned}
V_{\text {small }} & =\frac{4}{3} \pi\left(1.0076 \times 10^{-5} \mathrm{~cm}\right)^3 \\
V_{\text {small }} & =\frac{4}{3} \pi \times 1.022 \times 10^{-15} \mathrm{~cm}^3 \\
V_{\text {small }} & =4.28 \times 10^{-15} \mathrm{~cm}^3
\end{aligned}
$$


**Step 3: Calculate the number of small spheres**
The total number of small spheres $N$ is the ratio of the volume of the big cube to the volume of one small sphere:

$$
\begin{gathered}
N=\frac{V_{\mathrm{big}}}{V_{\text {small }}}=\frac{10.941 \mathrm{~cm}^3}{4.28 \times 10^{-15} \mathrm{~cm}^3} \\
N=2.56 \times 10^{15}
\end{gathered}
$$

**Final Answer:**
The number of small spheres you will end up with is approximately:

$$
N=2.56 \times 10^{15}
$$


##### B.) What is the surface area per mass of the resulting powder, $\operatorname{sur} f$ ? Note that the units are given in $m^2 / g$. $surf = \frac{m^2}{g}$

To calculate the surface area per mass of the resulting powder, we need to find the total surface area of all the small spheres and divide it by the total mass of the big cube.

**Step 1: Surface area of one small sphere**
The surface area $A_{\text {small }}$ of a sphere is given by the formula:

$$
A_{\text {small }}=4 \pi r^2
$$


We already know that the radius $r$ of each small sphere is:

$$
r=1.0076 \times 10^{-5} \mathrm{~cm}
$$


Substitute this into the formula for surface area:

$$
\begin{gathered}
A_{\text {small }}=4 \pi\left(1.0076 \times 10^{-5} \mathrm{~cm}\right)^2 \\
A_{\text {small }}=4 \pi \times 1.0153 \times 10^{-10} \mathrm{~cm}^2 \\
A_{\text {small }}=1.2764 \times 10^{-9} \mathrm{~cm}^2
\end{gathered}
$$


Convert this to square meters:

$$
A_{\text {small }}=1.2764 \times 10^{-9} \times 10^{-4} \mathrm{~m}^2=1.2764 \times 10^{-13} \mathrm{~m}^2
$$


**Step 2: Total surface area of all small spheres**
We previously calculated the total number of small spheres $N$ as:

$$
N=2.56 \times 10^{15}
$$


The total surface area $A_{\text {total }}$ is the number of spheres multiplied by the surface area of one sphere:

$$
\begin{gathered}
A_{\text {total }}=N \times A_{\text {small }}=2.56 \times 10^{15} \times 1.2764 \times 10^{-13} \mathrm{~m}^2 \\
A_{\text {total }}=3.269 \times 10^2 \mathrm{~m}^2
\end{gathered}
$$

**Step 3: Mass of the big cube**
The big cube has a volume of $10.941 \mathrm{~cm}^3$, and the density of the material is $1.05 \mathrm{~g} / \mathrm{cm}^3$. The mass $m$ of the big cube is:

$$
\begin{gathered}
m=\text { density } \times V_{\text {big }}=1.05 \mathrm{~g} / \mathrm{cm}^3 \times 10.941 \mathrm{~cm}^3 \\
m=11.488 \mathrm{~g}
\end{gathered}
$$


**Step 4: Surface area per mass**
The surface area per mass surf is given by:

$$
\begin{aligned}
\text { surf }=\frac{A_{\text {total }}}{m} & =\frac{3.269 \times 10^2 \mathrm{~m}^2}{11.488 \mathrm{~g}} \\
\text { surf }= & 28.45 \frac{m^2}{g}
\end{aligned}
$$


**Final Answer:**
The surface area per mass of the resulting powder is approximately:

$$
\operatorname{surf}=28.45 \frac{m^2}{g}
$$


#### Write a Python function surf_area that caclulates the surface area of cubes when you break a large cube into smaller ones. As arguments, use large_cube_length, the length of the large (initial) cube in cm , small_cube_length, the length of the resulting smaller cubes in $n m$, and density, the density of the material in $\mathrm{g} / \mathrm{cm}^3$. The function should return surf_per_mass, the surface per mass in $m^2 / g$.


```Python
def surf_area(large_cube_length, small_cube_length, density):
    """
    Calculate the surface area per mass when a large cube is broken into smaller cubes.
    
    Parameters:
    - large_cube_length: Length of the large cube in cm
    - small_cube_length: Length of the smaller cubes in nm
    - density: Density of the material in g/cm^3
    
    Returns:
    - surf_per_mass: Surface area per mass in m^2/g
    """
    # Convert the small cube length from nm to cm
    small_cube_length_cm = small_cube_length * 1e-7  # 1 nm = 1e-7 cm

    # Calculate the volume of the large cube in cm^3
    volume_large_cube = large_cube_length ** 3

    # Calculate the volume of a small cube in cm^3
    volume_small_cube = small_cube_length_cm ** 3

    # Calculate the total number of small cubes
    num_small_cubes = volume_large_cube / volume_small_cube

    # Calculate the surface area of one small cube (6 * side^2 for a cube)
    surface_area_small_cube = 6 * (small_cube_length_cm ** 2)

    # Calculate the total surface area
    total_surface_area = num_small_cubes * surface_area_small_cube  # in cm^2

    # Convert total surface area from cm^2 to m^2 (1 cm^2 = 1e-4 m^2)
    total_surface_area_m2 = total_surface_area * 1e-4

    # Calculate the mass of the large cube (mass = density * volume)
    mass_large_cube = density * volume_large_cube  # in grams

    # Calculate the surface area per mass
    surf_per_mass = total_surface_area_m2 / mass_large_cube  # in m^2/g

    return surf_per_mass

# Example usage
surf_per_mass = surf_area(2.38, 200.54, 1.12)
surf_per_mass
```



#### If we increase the surface area of a material by breaking it up into smaller cubes, the total amount of molecules that can be adsorbed to the interface
- [ ] depends on the molecule.
- [x] increases.
- [ ] decreases.
- [ ] depends on the material.
- [ ] None of the above


#### Estimate the contact angle for the following substrates. Choose any angle in the discrete interval [0, 180] inclusive, where each point is separated by a distance of 10.

##### A.) silicon wafer right after oxygen plasma cleaning
- [ ] 0

##### B.) silicon wafer coated with hydrocarbon molecules
- [ ] 110


##### C.) lotus leaf

- [ ] 170


#### For a surface with contact angle $90^{\circ}$, calculate the surface area of the droplet in contact with the surface (i.e. not air) as function of volume of a droplet.


For a surface with a contact angle of $90^{\circ}$, the droplet forms a hemisphere on the surface. Let's calculate the surface area of the droplet that is in contact with the surface (i.e., the base of the hemisphere) as a function of the droplet's volume.

**Step 1: Volume of the hemisphere**
The volume $V$ of a hemisphere is given by:

$$
V=\frac{2}{3} \pi r^3
$$

where $r$ is the radius of the hemisphere.
**Step 2: Surface area in contact with the surface**
The surface area of the droplet that is in contact with the surface is simply the area of the base of the hemisphere, which is a circle with radius $r$. The area $A$ of the base is:

$$
A=\pi r^2
$$


**Step 3: Express radius $r$ in terms of volume**
From the volume equation, we can solve for $r$ in terms of $V$ :

$$
V=\frac{2}{3} \pi r^3
$$


Solving for $r$ :

$$
r=\left(\frac{3 V}{2 \pi}\right)^{1 / 3}
$$
**Step 4: Substitute $r$ into the surface area equation**
Now, substitute this expression for $r$ into the surface area formula:

$$
A=\pi\left(\frac{3 V}{2 \pi}\right)^{2 / 3}
$$


Simplifying the equation:

$$
\begin{aligned}
A & =\pi\left(\frac{3^{2 / 3} V^{2 / 3}}{(2 \pi)^{2 / 3}}\right) \\
A & =\left(\frac{3^{2 / 3} \pi^{1 / 3}}{2^{2 / 3}}\right) V^{2 / 3}
\end{aligned}
$$


Thus, the surface area $A$ in contact with the surface as a function of the droplet volume $V$ is:

$$
A=\left(\frac{3^{2 / 3} \pi^{1 / 3}}{2^{2 / 3}}\right) V^{2 / 3}
$$


This is the surface area of the droplet in contact with the surface for a contact angle of $90^{\circ}$.

```cpp
((3^(2/3)*pi^(1/3))/(2^(2/3)))*V^(2/3)
```


#### Using the last two questions (contact angle of $90^{\circ}$ )

##### A.) what is the ratio of area of the liquid vapour interface to the area of the solid liquid interface? $\frac{A_{l v}\left(\theta=90^{\circ}\right)}{A_{l s}\left(\theta=90^{\circ}\right)}=$

Given a contact angle of $90^{\circ}$, the droplet forms a hemisphere on the surface. We are asked to find the ratio of the area of the liquid-vapor interface to the area of the solid-liquid interface.

**Step 1: Liquid-vapor interface area $\left(A_{l v}\right)$**
The liquid-vapor interface is the curved surface area of the hemisphere, which is given by the formula for the surface area of a hemisphere:

$$
A_{l v}=2 \pi r^2
$$

where $r$ is the radius of the hemisphere.

**Step 2: Solid-liquid interface area $\left(A_{l s}\right)$**
The solid-liquid interface is the area of the base of the hemisphere, which is a circle with radius $r$. The area of the base is:

$$
A_{l s}=\pi r^2
$$


**Step 3: Ratio of the areas**
Now, we can calculate the ratio of the liquid-vapor interface area to the solid-liquid interface area:

$$
\frac{A_{l v}}{A_{l s}}=\frac{2 \pi r^2}{\pi r^2}
$$


Simplifying:

$$
\frac{A_{l v}}{A_{l s}}=2
$$

**Final Answer:**
The ratio of the liquid-vapor interface area to the solid-liquid interface area for a contact angle of $90^{\circ}$ is:

$$
\frac{A_{l v}}{A_{l s}}=2
$$


This means that the liquid-vapor interface is twice the area of the solid-liquid interface for a hemisphere-shaped droplet with a $90^{\circ}$ contact angle.



##### B.) Suppose we make a big enough bubble that gravity now matters and we can no longer assume that the liquid maintains a spherical shape. The surface tensions of the solid gas interface and solid liquid interfaces are the same as before. What angle should the contact angle be to minimize the energy of the system? $\theta = ?^{\circ}$ 

When gravity becomes significant and the liquid no longer maintains a perfectly spherical shape, the system's total energy must take into account the gravitational potential energy, surface tensions, and contact angle. To minimize the system's energy, we must consider the balance between the surface tensions at the three-phase contact line (solid, liquid, and vapor interfaces). This is described by Young's Equation:

$$
\gamma_{s v}=\gamma_{s l}+\gamma_{l v} \cos \theta
$$


**Where:**
- $\gamma_{s v}$ is the surface tension of the solid-vapor interface,
- $\gamma_{s l}$ is the surface tension of the solid-liquid interface,
- $\gamma_{l v}$ is the surface tension of the liquid-vapor interface,
- $\theta$ is the contact angle.

**Assumption:**
In the problem, it is stated that the surface tensions of the solid-gas (solid-vapor) and solid-liquid interfaces are the same. This implies:

$$
\gamma_{s v}=\gamma_{s l}
$$


**Simplification of Young's Equation:**
Substituting $\gamma_{s v}=\gamma_{s l}$ into Young's equation:

$$
\gamma_{s l}=\gamma_{s l}+\gamma_{l v} \cos \theta
$$


Canceling out $\gamma_{s l}$ from both sides:

$$
0=\gamma_{l v} \cos \theta
$$


**Solving for the contact angle:**
For the above equation to hold, we must have:

$$
\cos \theta=0
$$


This implies:

$$
\theta=90^{\circ}
$$


**Final Answer:**
The contact angle that minimizes the energy of the system when gravity becomes significant is:

$$
\theta=90^{\circ}
$$


This result indicates that the system reaches equilibrium when the contact angle is $90^{\circ}$, meaning the liquid forms a hemispherical shape on the surface when gravity is considered.


##### C.) What should the ratio of the two areas be in this case?
- [ ] (a) $\frac{A_{l v}}{A_{l s}}=2$
- [ ] (b) $\frac{A_{l v}}{A_{l s}}>2$
- [ ] (c) $\frac{A_{l v}}{A_{l s}}<2$


Given that the contact angle is $90^{\circ}$ and we are now considering the effect of gravity, which distorts the droplet shape, let's analyze how this impacts the ratio of the areas.

**Recap of Previous Results:**
For a hemispherical droplet (with a contact angle of $90^{\circ}$ ) in the absence of gravity:
- The liquid-vapor interface area $\left(A_{l v}\right)$ was the curved surface area of the hemisphere, which is $2 \pi r^2$.
- The solid-liquid interface area $\left(A_{l s}\right)$ was the flat circular area of the base, which is $\pi r^2$.
- The ratio of these two areas was $\frac{A_{\text {k }}}{A_{\text {b }}}=2$.

**Now, with gravity:**
When the droplet is large enough for gravity to matter, the liquid no longer maintains a perfectly spherical shape. Instead, the droplet flattens due to the influence of gravity, spreading out more on the surface. This has two important consequences:
1. Solid-liquid interface $\left(A_{l s}\right)$ : The area of the base in contact with the surface increases because the droplet spreads more.
2. Liquid-vapor interface $\left(A_{l v}\right)$ : The liquid-vapor interface area may slightly increase, but the flattening effect caused by gravity tends to decrease the height of the droplet, reducing the overall curved surface area.

**Effect on the Ratio:**
Because the solid-liquid interface area $A_{l s}$ increases while the liquid-vapor interface area $A_{l v}$ does not increase as much, the ratio of $\frac{A_{l s}}{A_{t s}}$ will be less than 2 in this case.

**Final Answer:**
- (c) $\frac{A_{\text {b }}}{A_i}<2$

This is because gravity causes the droplet to spread, increasing the contact area with the solid surface, thereby reducing the ratio of the liquid-vapor interface area to the solid-liquid interface area.


#### For a surface with contact angle $90^{\circ}$, calculate the surface area of the droplet in contact with air (i.e. not the surface) as function of volume of a droplet.


For a surface with a contact angle of $90^{\circ}$, the droplet forms a hemisphere on the surface. We are asked to calculate the surface area of the droplet that is in contact with air (i.e., the curved surface area of the hemisphere) as a function of the droplet's volume.

Step 1: Volume of the hemisphere
The volume $V$ of a hemisphere is given by:

$$
V=\frac{2}{3} \pi r^3
$$

where $r$ is the radius of the hemisphere.
Step 2: Surface area of the liquid-vapor interface (air contact)
The surface area $A_{\text {lv }}$ of the liquid-vapor interface (i.e., the curved surface area of the hemisphere) is:

$$
A_{\mathrm{lv}}=2 \pi r^2
$$


Step 3: Express radius $r$ in terms of volume $V$
From the volume formula, we can solve for $r$ in terms of $V$ :

$$
V=\frac{2}{3} \pi r^3
$$


Solving for $r$ :

$$
r=\left(\frac{3 V}{2 \pi}\right)^{1 / 3}
$$

Step 4: Substitute $r$ into the surface area formula
Now, substitute the expression for $r$ into the surface area equation:

$$
A_{\mathrm{lv}}=2 \pi\left(\frac{3 V}{2 \pi}\right)^{2 / 3}
$$


Simplifying the equation:

$$
\begin{gathered}
A_{\mathrm{lv}}=2 \pi\left(\frac{3^{2 / 3} V^{2 / 3}}{(2 \pi)^{2 / 3}}\right) \\
A_{\mathrm{lv}}=\left(\frac{2 \times 3^{2 / 3} \pi^{1 / 3}}{\left(2^{2 / 3}\right)}\right) V^{2 / 3}
\end{gathered}
$$


Final Expression:

$$
A_{\mathrm{lv}}=\left(\frac{2 \times 3^{2 / 3} \pi^{1 / 3}}{2^{2 / 3}}\right) V^{2 / 3}
$$


This is the surface area of the droplet that is in contact with air (liquid-vapor interface) as a function of the volume of the droplet $V$.

```C
((2*3^(2/3)*pi^(1/3))/(2^(2/3)))*V^(2/3)
```

#### Find and briefly describe three different experimental methods to measure contact angles. Include a reference to a scientific publication, advantages, and disadvantages of each method.

###### Acoustic Levitation

**Description:** Acoustic levitation uses sound waves to suspend a liquid droplet in mid-air. The droplet’s shape changes under the influence of gravity and surface tension, and by analyzing these deformations, the surface tension and contact angle can be inferred. This method is advantageous for noncontact measurements, particularly for small or sensitive samples.

**Advantages:**
- Noncontact manipulation of the sample.
- Requires only a small volume of liquid.

**Disadvantages:**
- The technique may be challenging to apply to very volatile liquids due to potential evaporation during the measurement process.

**Reference:**
Tian, Y.; Holt, R. G.; Apfel, R. E. A New Method for Measuring Liquid Surface Tension with Acoustic Levitation. Rev. Sci. Instrum. 1995, 66, 3349-3354. https://doi.org/10.1063/1.1145418.


###### Capillary Rise Method

**Description:** The capillary rise method measures the height a liquid rises in a narrow tube due to surface tension forces. The height is determined by the balance between the cohesive forces within the liquid and the adhesive forces between the liquid and the tube.

**Advantages:**
- Simple to perform with basic laboratory equipment.
- Can be combined with external magnetic field applications for advanced studies.

**Disadvantages:**
- Requires careful maintenance of the capillary tube's inner surface to avoid contamination.
- Accurately measuring the rise height and contact angle presents practical challenges.

**Reference:**
Cao, J. K.; Zhou, D. F.; Zhang, Y. B. Improvements in Surface Tension Measurement Using the Capillary Rise Method and Its Application to Water under External Magnetic Fields. J. Mol. Liq. 2023, 382, 121988. https://doi.org/10.1016/j.molliq.2023.121988.


###### Pendant Drop Tensionometry
**Description:** Pendant drop tensiometry involves suspending a liquid droplet from a needle and analyzing its shape at the liquid-air interface. This shape analysis allows for the determination of both contact angle and interfacial tension. 

**Advantages:**
- The method is ideal for small liquid volumes and highly viscous fluids
- No mechanical or electronic transducer calibration is required.
- Capable of measuring interfacial tension over extended periods.
- Suitable for small volumes and highly viscous liquids.
- Can measure both contact angle and interfacial tension simultaneously.

**Disadvantages:**
- its accuracy diminishes for fast dynamic processes or when gravitational effects are minimal.
- Inaccuracy arises when the Bond number is small.
- Less suitable for fast dynamic interfacial processes (time steps $<1 \mathrm{~s}$ ).

**Reference:**
Berry, J. D.; Neeson, M. J.; Dagastine, R. R.; Chan, D. Y. C.; Tabor, R. F. Measurement of Surface and Interfacial Tension Using Pendant Drop Tensiometry. J. Colloid Interface Sci. 2015, 454, 226237. https://doi.org/10.1016/j.jcis.2015.05.012.



#### Which of the following techniques can give real-space quantitative information about surface properties? Select all possible options that apply.
- [x] Atomic Force Microscopy
- [x] Scanning Tunnelling Microscopy
- [x] Scanning Electron Microscopy
- [ ] Wide angle X-ray Scattering
- [x] Contact Angle
- [ ] Neutron Scattering
- [ ] Ellipsometry
- [ ] Glancing Angle X-ray Diffraction



#### Which of the following techniques can give average quantitative information about surface properties? Select all possible options that apply.
- [ ] Wide angle X-ray Scattering
- [x] Glancing Angle X-ray Diffraction
- [x] Ellipsometry
- [x] Neutron Scattering
- [ ] Scanning Electron Microscopy
- [ ] Atomic Force Microscopy
- [x] Contact Angle
- [ ] Scanning Tunnelling Microscopy


#### Situation 1: Engineering Fiber Surface for Composite Materials
##### For each of the following scenarios, select which characterization method would be *most* practical for your research question.
##### Your company buys a glass fiber which you are embedding into an epoxy matrix to make a mechanically-resillient composite material. To improve the interfacial binding, you deposit a monolayer of amino-silane (where the silane binds to the glass, and the amine mixes with the epoxy) through chemical vapor deposition onto the glass fiber. You want to first confirm that the amino-silane is condensing on the surface of the glass fiber. Then, you want to identify the minimum amount of time needed to get a coating of the linker molecule.

##### Which of the following techniques would you use?
- [ ] Glancing Angle X-ray Diffraction
- [ ] Atomic Force Microscopy
- [ ] Scanning Tunnelling Microscopy
- [ ] Wide angle X-ray Scattering
- [ ] Neutron Scattering
- [ ] Ellipsometry
- [ ] Scanning Electron Microscopy
- [x] Contact Angle


#### Situation 2: Reducing Defects of Die Punched Aluminum Parts
##### Your company produces steel-punched aluminum parts. It is known that the metal transfers from die to the part because of sliding. Should sufficient metal transfer, the part will be unusable and the die itself will degrade in quality. You believe that applying a thin layer of mineral oil lubricant between die and surface might reduce the metal transfer. (situation taken loosely from "Friction and Metal Transfer in Sliding Aluminum against Ion Implanted Steel" by P.C. Nautiyal and J. A. Schey)

##### Which of the following techniques would you use?
- [ ] Wide angle X-ray Scattering
- [ ] Glancing Angle X-ray Diffraction
- [ ] Scanning Tunnelling Microscopy
- [ ] Neutron Scattering
- [ ] Atomic Force Microscopy
- [x] Scanning Electron Microscopy
- [ ] Contact Angle
- [ ] Ellipsometry




#### Situation 3: Characterizing Nanometer-scale Control of Graphene
##### Your lab is working on making electrical devices with graphene, a conducting sheet of carbon. To have impact in high performance computing, you need to show that your method can have atomic level precision while being placed on arbitrary surfaces. You developed a method of solution synthesizing graphene nanoribbons which can be cleanly placed onto arbitrary surfaces using a dry contact transfer method. Now, you want to show that this method has atomic level precision in placement. (situation taken loosely from work done by Lyding lab at UIUC)

##### Which of the following techniques would you use?
- [x] Scanning Tunnelling Microscopy
- [ ] Glancing Angle X-ray Diffraction
- [ ] Atomic Force Microscopy
- [ ] Scanning Electron Microscopy
- [ ] Neutron Scattering
- [ ] Wide angle X-ray Scattering
- [ ] Ellipsometry
- [ ] Contact Angle

#### If we increase the surface tension of a liquid droplet on a surface, the contact angle will

- [x] increase
- [ ] decrease
- [ ] stay the same

###### solution
The contact angle is influenced by the balance of surface tensions at the interfaces (solid-liquid, liquid-vapor, and solid-vapor). According to Young's Equation:

$$
\gamma_{s v}=\gamma_{s l}+\gamma_{l v} \cos \theta
$$


Where:
- $\gamma_{s v}$ is the surface tension between the solid and vapor,
- $\gamma_{s l}$ is the surface tension between the solid and liquid,
- $\gamma_{l v}$ is the surface tension between the liquid and vapor (i.e., the surface tension of the liquid),
- $\theta$ is the contact angle.

If we increase the liquid's surface tension $\left(\gamma_{l v}\right)$, and assuming $\gamma_{s v}$ and $\gamma_{s l}$ stay constant, then:

$$
\cos \theta=\frac{\gamma_{s v}-\gamma_{s l}}{\gamma_{l v}}
$$


As $\gamma_{l v}$ increases, the value of $\cos \theta$ decreases, which means the contact angle $\theta$ increases.
Final Answer:
- increase: $\checkmark$

Increasing the surface tension of the liquid will increase the contact angle.



#### How does the tunneling current behave as function of distance of a STM tip from the surface?
- [ ] (a) quadratic decay
- [ ] (b) exponential increase
- [ ] (c) sinusoidal oscillation
- [ ] (d) linear decay
- [x] (e) None of the above


###### solution

In Scanning Tunneling Microscopy (STM), the tunneling current between the tip and the surface depends on the distance between them. The relationship between the tunneling current $I$ and the tip-surface distance $d$ is given by an exponential decay:

$$
I \propto e^{-\kappa d}
$$

where $\kappa$ is a constant that depends on the properties of the material (such as the work function).
As the tip moves away from the surface, the tunneling current decreases exponentially.

Correct Answer:
- (e) None of the above: $\checkmark$

The tunneling current follows an exponential decay, which is not one of the options explicitly listed. Therefore, the correct response is "None of the above."



#### What are correct units for surface tension? Select all that are potential correct units. Select all possible options that apply.
- [ ] $N /\left(s m^2\right)$
- [ ] $m J / m^2$
- [ ] $\mathrm{kg} / \mathrm{mol}$
- [ ] $K / s$
- [x] $N / m$
- [x] $J / m^2$
- [ ] $m N / m$


###### solution

(e) $N / m$
- Correct. Surface tension can be expressed as force per unit length, so $N / m$ (newtons per meter) is a valid unit.
(f) $J / m^2$
- Correct. Surface tension can also be expressed as energy per unit area, which is $J / \mathrm{m}^2$ (joules per square meter). This is an alternative expression of surface tension.


#### A lotus leaf is:
- [ ] mildly hydrophilic
- [ ] mildly hydrophobic
- [ ] neutral
- [x] superhydrophobic
- [ ] None of the above


