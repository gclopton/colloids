# 6 Nucleation Barrier and Its Role in Surface Energy

### 0.6.1 Nucleation Barrier
- **Which concept explains why:** The nucleation barrier is a concept that explains why new phases (like ice forming in water) do not occur spontaneously, even when conditions are favorable for the phase transition. 
- It represents the energy barrier that must be overcome for a new phase (such as a crystal or droplet) to form and grow.
- When a new phase begins to form, such as a crystal nucleus in a supercooled liquid, there is a competition between the decrease in bulk free energy (which drives the phase transition) and the increase in surface energy (which opposes it). 
- The surface energy is proportional to the area of the interface between the new and old phases, while the bulk free energy change is proportional to the volume of the new phase.

Mathematically, this can be expressed as:
- Positive Surface Energy Contribution: The surface energy increases with the square of the radius $r$ of the nucleus (since surface area scales with $r^2$ ).
- Negative Bulk Energy Contribution: The bulk free energy decreases with the cube of the radius $r$ (since volume scales with $r^3$ ).

The total free energy change $\Delta G$ as a function of the radius $r$ of the nucleus is:

$$
\begin{aligned}
& \Delta G(r)=\text { Surface Energy Contribution - Bulk Free Energy Contribution } \\
& \qquad \Delta G(r)=\gamma r^2-\Delta G_v r^3
\end{aligned}
$$


Where:
- $\gamma$ is the surface tension or surface energy per unit area,
- $\Delta G_v$ is the difference in bulk free energy per unit volume between the new and old phases.


##### Questions

Here are some multiple-choice questions based on the concept of the nucleation barrier:

### Question 23: Explanation of Nucleation Barrier
23. **What does the concept of the nucleation barrier explain in phase transitions?**
   - A. Why new phases occur rapidly once conditions are favorable
   - B. Why new phases do not form spontaneously, even when conditions are favorable
   - C. Why temperature has no effect on phase transitions
   - D. Why the new phase grows continuously without an energy input  

   **Answer:** B

### Question 24: Definition of Nucleation Barrier
24. **What is the nucleation barrier in the context of phase formation?**
    - A. The difference in temperature required for phase transition
    - B. The minimum number of atoms required to form a stable phase
    - C. The energy barrier that must be overcome for a new phase to form and grow
    - D. The energy gained by the bulk free energy during phase transition  

    **Answer:** C

### Question 25: Bulk Free Energy vs. Surface Energy
25. **What happens to bulk free energy and surface energy when a new phase forms?**
    - A. Bulk free energy increases, and surface energy decreases
    - B. Both bulk free energy and surface energy decrease
    - C. Bulk free energy decreases, while surface energy increases
    - D. Both bulk free energy and surface energy increase  

    **Answer:** C

### Question 26: Relationship of Surface Energy to Interface Area
26. **The surface energy associated with a nucleation barrier is proportional to which of the following?**
    - A. The volume of the new phase
    - B. The temperature of the environment
    - C. The area of the interface between the new and old phases
    - D. The total free energy of the system  

    **Answer:** C

Question 27: Surface Energy Contribution
27. How does the surface energy contribution of a nucleus change as its radius $r$ increases?
- A. It increases linearly with $r$
- B. It increases with the square of $r$
- C. It decreases with the square of $r$
- D. It decreases with the cube of $r$

Answer: B
Question 28: Bulk Free Energy Contribution
28. How does the bulk free energy contribution change with the radius $r$ of a nucleus?
- A. It decreases linearly with $r$
- B. It decreases with the square of $r$
- C. It decreases with the cube of $r$
- D. It increases with the cube of $r$

Answer: C
Question 29: Surface Area vs. Volume Scaling
29. Which of the following correctly describes the relationship between surface energy and bulk free energy as a nucleus grows?
- A. Surface energy scales with the volume of the nucleus
- B. Surface energy scales with $r^2$ and bulk free energy scales with $r^3$
- C. Both surface energy and bulk free energy scale with $r^2$
- D. Both surface energy and bulk free energy scale with $r^3$

Answer: B
Question 30: Implication of Surface and Bulk Energy Contributions
30. What is the implication of surface energy increasing with $r^2$ and bulk free energy decreasing with $r^3$ for a nucleus of critical radius?
- A. At small $r$, surface energy dominates, preventing nucleation
- B. At large $r$, surface energy dominates, encouraging nucleation
- C. Both surface energy and bulk free energy remain equal regardless of $r$
- D. The system never reaches a critical radius because both contributions decrease

Answer: A

---


In a supercooled liquid, a nucleus of a new solid phase begins to form. The total free energy change associated with forming this nucleus of radius $r$ is $3 \times 10^6 \mathrm{~J} / \mathrm{m}^3$ and the surface tension is $0.12 \mathrm{~J} / \mathrm{m}^2$. Calculate the radius for the minimum total free energy change.

A. 13.3 nm
B. 26.7 nm
C. 33.3 nm
D. 40.0 nm


1. Set Up the Equation for the Critical Radius

To find the critical radius $r_{\mathrm{c},}$, we set the derivative of $\Delta G(r)$ with respect to $r$ equal to zero, as this corresponds to the maximum of $\Delta G(r)$ :

$$
\frac{d}{d r} \Delta G(r)=0
$$


Given:

$$
\Delta G(r)=\gamma r^2-\Delta G_v r^3
$$


We differentiate $\Delta G(r)$ with respect to $r$ :

$$
\frac{d}{d r} \Delta G(r)=2 \gamma r-3 \Delta G_v r^2
$$


Set this equal to zero:

$$
2 \gamma r-3 \Delta G_v r^2=0
$$

2. Solve for $r$

Factor out $r$ :

$$
r\left(2 \gamma-3 \Delta G_v r\right)=0
$$


This gives two solutions:
- $r=0$, which is not relevant as it represents no nucleus.
- $2 \gamma-3 \Delta G_v r=0$.

Solve for $r$ :

$$
\begin{gathered}
3 \Delta G_v r=2 \gamma \\
r=\frac{2 \gamma}{3 \Delta G_v}
\end{gathered}
$$


Thus, the critical radius $r_c$ is:

$$
r_c=\frac{2 \gamma}{3 \Delta G_v}
$$

3. Calculate the Critical Radius

Substitute the given values of $\gamma$ and $\Delta G_v$ :

$$
\begin{gathered}
r_c=\frac{2 \times 0.12}{3 \times 3 \times 10^6} \\
r_c=\frac{0.24}{9 \times 10^6} \\
r_c=2.67 \times 10^{-8} \mathrm{~m}
\end{gathered}
$$


Converting to nanometers ( $\left.1 \mathrm{~m}=10^9 \mathrm{~nm}\right)$ :

$$
r_c=26.7 \mathrm{~nm}
$$





### 0.6.2 Why Do We See a Peak in the Energy Landscape?

- The energy landscape as a function of the nucleus radius $r$ shows a peak at a certain critical radius $r_c$. 
- At radii smaller than $r_c$, the positive surface energy dominates, and the total free energy $\Delta G(r)$ increases with increasing $r$. 
- This means that small nuclei are unstable and tend to dissolve because it is energetically unfavorable for them to grow. 
- However, once the nucleus reaches the critical radius $r_c$, the negative bulk free energy term becomes dominant, and the total free energy $\Delta G(r)$ begins to decrease with increasing $r$, making the growth of the nucleus energetically favorable.

The critical radius $r_c$ can be found by setting the derivative of $\Delta G(r)$ with respect to $r$ equal to zero:

$$
\frac{d \Delta G(r)}{d r}=2 \gamma r-3 \Delta G_v r^2=0
$$


Solving for $r$ gives the critical radius:

$$
r_c=\frac{2 \gamma}{\Delta G_v}
$$


Once a nucleus reaches this critical size, it will continue to grow, leading to the formation of a new phase throughout the system.



##### Questions


1. Which of the following best describes the behavior of the total free energy $\Delta G(r)$ as a function of nucleus radius $r$ ?
A) $\Delta G(r)$ decreases monotonically with increasing $r$.
B) $\Delta G(r)$ increases monotonically with increasing $r$.
C) $\Delta G(r)$ reaches a maximum at a critical radius $r_c$ and then decreases with further increase in $r$
D) $\Delta G(r)$ remains constant regardless of the nucleus radius $r$.

Answer: C
2. At radii smaller than the critical radius $r_c$, which energy term dominates the total free energy $\Delta G(r)$ ?
A) Negative bulk free energy term.
B) Positive surface energy term.
C) Kinetic energy term.
D) Gravitational potential energy term.

Answer: B
3. Why are small nuclei with radius less than the critical radius $r_c$ unstable and tend to dissolve?
A) Because the negative bulk free energy term dominates.
B) Because it is energetically unfavorable for them to grow due to the dominance of positive surface energy.
C) Because they have reached the total free energy minimum.
D) Because they possess excessive kinetic energy.

Answer: B

4. Once the nucleus reaches the critical radius $r_c$, what happens to the total free energy $\Delta G(r)$ as the radius increases further?
A) It continues to increase.
B) It begins to decrease, making the growth of the nucleus energetically favorable.
C) It remains constant.
D) It fluctuates unpredictably.

Answer: B
5. At radii larger than the critical radius $r_c$, which energy term becomes dominant in determining the total free energy $\Delta G(r)$ ?
A) Positive surface energy term.
B) Negative bulk free energy term.
C) Thermal energy term.
D) Electrostatic energy term.

Answer: B
6. What is the significance of the critical radius $r_c$ in the context of nucleus growth?
A) It is the radius at which the nucleus dissolves completely.
B) It is the radius at which the total free energy $\Delta G(r)$ is minimized.
C) It is the radius at which the total free energy $\Delta G(r)$ is maximized, and beyond which growth becomes energetically favorable.
D) It is the radius at which the surface and bulk free energies are equal but opposite.

Answer: C

7. Which statement best explains the energy landscape of a nucleus as it grows from a small radius to a large radius?
A) The total free energy decreases steadily due to decreasing surface energy.
B) The total free energy first increases due to surface energy dominance, reaches a peak at $r_{c r}$ then decreases as bulk energy becomes dominant.
C) The total free energy remains constant because surface and bulk energies balance out at all sizes.
D) The total free energy increases indefinitely due to increasing bulk energy.

Answer: B
8. In the context of nucleus formation, what role does the positive surface energy play at small radii?
A) It facilitates the growth of the nucleus by lowering the total free energy.
B) It hinders the growth of the nucleus by increasing the total free energy.
C) It has no significant effect on the total free energy.
D) It converts into kinetic energy, aiding in nucleus stability.

Answer: B
9. How does the negative bulk free energy influence the stability of a nucleus once it surpasses the critical radius $r_c$ ?
A) It destabilizes the nucleus by increasing the total free energy.
B) It stabilizes the nucleus by decreasing the total free energy.
C) It has no impact on the nucleus's stability.
D) It reverses into positive energy, causing the nucleus to dissolve.

Answer: B

10. What can be inferred about the tendency of a nucleus to grow or dissolve based on its radius relative to $r_c$ ?
A) Nuclei smaller than $r_c$ tend to grow spontaneously.
B) Nuclei at exactly $r_c$ are in a state of maximum instability.
C) Nuclei larger than $r_c$ tend to dissolve.
D) Nuclei smaller than $r_c$ tend to dissolve, while those larger than $r_c$ tend to grow.

Answer: D


In a solidification process, the surface energy per unit area of a forming nucleus is $0.1 \mathrm{~J} / \mathrm{m}^2$, and the negative volume free energy change per unit volume is $-10 \mathrm{~J} / \mathrm{m}^3$. Calculate the critical radius $r_{\mathrm{c}}$ at which the nucleus becomes stable and will continue to grow.
A) 0.005 m
B) 0.01 m
C) 0.02 m
D) 0.05 m

Solution:

Given:
- Surface energy per unit area, $\gamma=0.1 \mathrm{~J} / \mathrm{m}^2$
- Negative volume free energy change per unit volume, $\Delta G_v=-10 \mathrm{~J} / \mathrm{m}^3$

First, take the absolute value of $\Delta G_v$ since it's negative:

$$
\left|\Delta G_v\right|=10 \mathrm{~J} / \mathrm{m}^3
$$


Now, use the formula for the critical radius:

$$
r_c=\frac{2 \gamma}{\left|\Delta G_v\right|}=\frac{2 \times 0.1}{10}=\frac{0.2}{10}=0.02 \mathrm{~m}
$$


Answer:
C) 0.02 m

